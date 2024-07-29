'use client'
import React, { ReactNode } from 'react';

interface FileTriggerProps {
  children: ReactNode;
  acceptDirectory?: boolean;
  acceptedFileTypes?: string;
  allowsMultiple?: boolean;
}

const FileTrigger: React.FC<FileTriggerProps> = ({ children, acceptDirectory = false, acceptedFileTypes, allowsMultiple = false }) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        data-webkitdirectory={acceptDirectory ? 'webkitdirectory' : undefined}
        accept={acceptedFileTypes}
        multiple={allowsMultiple}
      />
      <div onClick={handleClick} className="inline-block cursor-pointer">
        {children}
      </div>
    </div>
  );
};

export default FileTrigger;
