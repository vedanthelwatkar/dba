"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { X, ArrowLeft, ArrowRight, ZoomIn, ZoomOut } from "lucide-react";

const ImageModal = ({
  isOpen,
  onClose,
  images,
  activeIndex,
  onPrevious,
  onNext,
  showNavigation = true,
  title = "",
}) => {
  const [zoomLevel, setZoomLevel] = React.useState(1);
  const [panPosition, setPanPosition] = React.useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = React.useState(false);
  const [dragStart, setDragStart] = React.useState({ x: 0, y: 0 });

  const currentImage = images[activeIndex];

  const zoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  };

  const zoomOut = () => {
    setZoomLevel((prev) => {
      const newZoom = Math.max(prev - 0.5, 0.5);
      if (newZoom <= 1) {
        setPanPosition({ x: 0, y: 0 });
      }
      return newZoom;
    });
  };

  const resetZoom = () => {
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - panPosition.x,
        y: e.clientY - panPosition.y,
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoomLevel > 1) {
      setPanPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      const touch = e.touches[0];
      setDragStart({
        x: touch.clientX - panPosition.x,
        y: touch.clientY - panPosition.y,
      });
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging && zoomLevel > 1) {
      e.preventDefault();
      const touch = e.touches[0];
      setPanPosition({
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y,
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handlePrevious = () => {
    if (onPrevious) {
      onPrevious();
      resetZoom();
    }
  };

  const handleNext = () => {
    if (onNext) {
      onNext();
      resetZoom();
    }
  };

  const handleClose = () => {
    resetZoom();
    onClose();
  };

  React.useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    const navbar = document.querySelector("nav, header, .navbar");
    if (navbar) {
      navbar.style.display = "none";
    }

    const onKey = (e) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft" && showNavigation && onPrevious)
        handlePrevious();
      if (e.key === "ArrowRight" && showNavigation && onNext) handleNext();
      if (e.key === "+" || e.key === "=") zoomIn();
      if (e.key === "-") zoomOut();
      if (e.key === "0") resetZoom();
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "unset";
      const navbar = document.querySelector("nav, header, .navbar");
      if (navbar) {
        navbar.style.display = "";
      }
    };
  }, [isOpen, showNavigation, onPrevious, onNext]);

  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, dragStart, panPosition]);

  React.useEffect(() => {
    resetZoom();
  }, [activeIndex]);

  if (!isOpen || !currentImage) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={handleClose}
    >
      <div
        className="relative w-full h-full max-w-6xl max-h-[90vh] flex flex-col bg-black rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls */}
        <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              size="icon"
              onClick={zoomOut}
              className="rounded-full bg-black/50 hover:bg-black/70 border-white/20"
              aria-label="Zoom out"
              disabled={zoomLevel <= 0.5}
            >
              <ZoomOut className="h-4 w-4 text-white" />
            </Button>
            <span className="text-white text-sm bg-black/50 px-3 py-1 rounded-full">
              {Math.round(zoomLevel * 100)}%
            </span>
            <Button
              variant="secondary"
              size="icon"
              onClick={zoomIn}
              className="rounded-full bg-black/50 hover:bg-black/70 border-white/20"
              aria-label="Zoom in"
              disabled={zoomLevel >= 3}
            >
              <ZoomIn className="h-4 w-4 text-white" />
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={resetZoom}
              className="rounded-full bg-black/50 hover:bg-black/70 border-white/20 text-white text-xs"
              aria-label="Reset zoom"
            >
              Reset
            </Button>
          </div>

          <Button
            variant="secondary"
            size="icon"
            onClick={handleClose}
            className="rounded-full bg-black/50 hover:bg-black/70 border-white/20"
            aria-label="Close viewer"
          >
            <X className="h-5 w-5 text-white" />
          </Button>
        </div>

        {/* Navigation Arrows */}
        {showNavigation && onPrevious && (
          <Button
            variant="secondary"
            size="icon"
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/50 hover:bg-black/70 border-white/20"
            aria-label="Previous"
          >
            <ArrowLeft className="h-5 w-5 text-white" />
          </Button>
        )}

        {showNavigation && onNext && (
          <Button
            variant="secondary"
            size="icon"
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/50 hover:bg-black/70 border-white/20"
            aria-label="Next"
          >
            <ArrowRight className="h-5 w-5 text-white" />
          </Button>
        )}

        {/* Image Container */}
        <div className="w-full h-full flex items-center justify-center overflow-hidden">
          <div
            className="w-full h-full flex items-center justify-center overflow-hidden"
            style={{
              cursor:
                zoomLevel > 1 ? (isDragging ? "grabbing" : "grab") : "default",
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={currentImage.src || "/placeholder.svg"}
              alt={currentImage.alt || "Image"}
              className="transition-transform duration-200 ease-out select-none"
              style={{
                transform: `scale(${zoomLevel}) translate(${
                  panPosition.x / zoomLevel
                }px, ${panPosition.y / zoomLevel}px)`,
                maxWidth: "100%",
                maxHeight: "100%",
                width: "auto",
                height: "auto",
                objectFit: "contain",
              }}
              loading="eager"
              draggable={false}
            />
          </div>
        </div>

        {/* Bottom Info */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <div className="flex items-center justify-between">
            <div className="text-sm text-white bg-black/50 px-3 py-2 rounded-full">
              {title || currentImage.alt || "Image"}
            </div>
            {showNavigation && images.length > 1 && (
              <div className="text-sm text-white bg-black/50 px-3 py-2 rounded-full">
                {activeIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
