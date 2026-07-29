/**
 * Validates image file type and size.
 * Allowed: jpg, jpeg, png, webp — max 5 MB.
 */
export function validateImageFile(file: File): string | true {
  const allowed = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  if (!allowed.includes(file.type)) {
    return 'Only JPG, JPEG, PNG, or WEBP images are allowed.';
  }
  const maxSize = 5 * 1024 * 1024; // 5 MB
  if (file.size > maxSize) {
    return 'Image size must be less than 5 MB.';
  }
  return true;
}

/**
 * Formats a date string to a human-readable format.
 */
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Generates a random confetti piece style.
 */
export function randomConfettiStyle(index: number): React.CSSProperties {
  const colors = [
    '#16a34a', '#dc2626', '#f59e0b', '#3b82f6',
    '#8b5cf6', '#ec4899', '#14b8a6', '#f97316',
  ];
  return {
    position: 'fixed',
    left: `${Math.random() * 100}vw`,
    top: '-20px',
    width: `${Math.random() * 10 + 6}px`,
    height: `${Math.random() * 10 + 6}px`,
    backgroundColor: colors[index % colors.length],
    borderRadius: Math.random() > 0.5 ? '50%' : '2px',
    animationDuration: `${Math.random() * 2 + 2}s`,
    animationDelay: `${Math.random() * 1}s`,
    zIndex: 9999,
  };
}

// Need React for CSSProperties
import type React from 'react';
