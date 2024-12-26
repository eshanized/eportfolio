import React from 'react';

function BackgroundPattern() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-1/2 -right-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-b from-primary-200/30 to-primary-400/30 dark:from-nord-frost-1/10 dark:to-nord-frost-2/10 blur-3xl" />
      <div className="absolute -bottom-1/2 -left-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-t from-primary-200/30 to-primary-400/30 dark:from-nord-frost-1/10 dark:to-nord-frost-2/10 blur-3xl" />
    </div>
  );
}

export default BackgroundPattern;