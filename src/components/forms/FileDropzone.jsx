import { useState, useRef } from "react";
import { UploadCloud } from "lucide-react";

export default function FileDropzone({
  label = "Click to upload or drag files here",
  hint = "JPG, PNG or MP4 up to 25MB",
  accept = "image/*,video/*",
  multiple = true,
  onFilesSelected,
  className = "",
}) {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);

  const handleFiles = (fileList) => {
    const files = Array.from(fileList);
    onFilesSelected?.(files);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files?.length) {
      handleFiles(e.dataTransfer.files);
    }
  };

  return (
    <div
      onClick={() => inputRef.current?.click()}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      className={`
        flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed
        py-10 px-4 text-center cursor-pointer transition-colors
        ${isDragging ? "border-brand-green bg-brand-green/5" : "border-gray-200 bg-slate-50 hover:bg-slate-100"}
        ${className}
      `}
    >
      <div className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center">
        <UploadCloud size={18} className="text-gray-500" />
      </div>
      <p className="text-sm font-semibold text-gray-800">{label}</p>
      <p className="text-xs text-gray-400">{hint}</p>

      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={(e) => e.target.files && handleFiles(e.target.files)}
        className="hidden"
      />
    </div>
  );
}
