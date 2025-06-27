"use client";

import { useState, useRef, type DragEvent, type ChangeEvent } from "react";
import {
  HiBriefcase,
  HiX,
  HiSearch,
  HiCalendar,
  HiCloudUpload,
  HiCheckCircle,
} from "react-icons/hi";

interface FileInfo {
  name: string;
  size: number;
  file: File;
}

export default function CVForm() {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<FileInfo | null>(null);
  const [error, setError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form state
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB in bytes

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return (
      Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
    );
  };

  const validateFile = (file: File): boolean => {
    const allowedTypes = [
      "text/plain",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/pdf",
      "image/jpeg",
      "image/png",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ];

    if (file.size > MAX_FILE_SIZE) {
      setError("File size must be less than 50MB");
      return false;
    }

    if (!allowedTypes.includes(file.type)) {
      setError("Only txt, docx, pdf, jpeg, xlsx files are allowed");
      return false;
    }

    setError("");
    return true;
  };

  const handleFile = (file: File) => {
    if (validateFile(file)) {
      setSelectedFile({
        name: file.name,
        size: file.size,
        file: file,
      });
    }
  };

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const removeFile = () => {
    setSelectedFile(null);
    setError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg dark:shadow-neutral-900/20 w-full max-w-2xl p-4 md:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-neutral-100 dark:bg-neutral-700 rounded-lg flex items-center justify-center">
              <HiBriefcase className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-neutral-900 dark:text-white">
                Add experience
              </h1>
            </div>
          </div>
          <button className="w-8 h-8 flex items-center justify-center text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
            <HiX className="w-6 h-6" />
          </button>
        </div>

        <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-8">
          Highlight your previous workplaces on your profile.
        </p>

        <form className="space-y-6">
          {/* Job Title and Company Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-neutral-900 dark:text-neutral-200 mb-2">
                Job Title
              </label>
              <input
                type="text"
                placeholder="Fill you job title"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="w-full px-4 py-2 border border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-900 dark:text-neutral-200 mb-2">
                Company
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <HiSearch className="h-5 w-5 text-neutral-400 dark:text-neutral-500" />
                </div>
                <input
                  type="text"
                  placeholder="Search company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>
          </div>

          {/* Location and Company Website Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-neutral-900 dark:text-neutral-200 mb-2">
                Location
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <HiSearch className="h-5 w-5 text-neutral-400 dark:text-neutral-500" />
                </div>
                <input
                  type="text"
                  placeholder="Search location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-900 dark:text-neutral-200 mb-2">
                Company Website
              </label>
              <input
                type="url"
                placeholder="dpstemplates.com"
                value={companyWebsite}
                onChange={(e) => setCompanyWebsite(e.target.value)}
                className="w-full px-4 py-2 border border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>

          {/* Join Date and End Date Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-neutral-900 dark:text-neutral-200 mb-2">
                Join Date
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <HiCalendar className="h-5 w-5 text-neutral-400 dark:text-neutral-500" />
                </div>
                <input
                  type="text"
                  placeholder="10 Jan 2023"
                  value={joinDate}
                  onChange={(e) => setJoinDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-900 dark:text-neutral-200 mb-2">
                End Date
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <HiCalendar className="h-5 w-5 text-neutral-400 dark:text-neutral-500" />
                </div>
                <input
                  type="text"
                  placeholder="10 Jan 2023"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>
          </div>

          {/* Upload Portfolio Section */}
          <div>
            <label className="block text-sm font-medium text-neutral-900 dark:text-neutral-200 mb-2">
              Upload Portfolio
            </label>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
              Drag and drop document to upload your portfolio on previous
              company.
            </p>

            <div
              className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${
                dragActive
                  ? "border-blue-400 bg-blue-50 dark:bg-blue-950/30"
                  : selectedFile
                    ? "border-green-400 bg-green-50 dark:bg-green-950/30"
                    : "border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-700/50"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                ref={fileInputRef}
                type="file"
                onChange={handleFileSelect}
                className="hidden"
                accept=".txt,.docx,.pdf,.jpeg,.jpg,.xlsx"
              />

              {!selectedFile ? (
                <div className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-neutral-200 dark:bg-neutral-600 rounded-full flex items-center justify-center">
                    <HiCloudUpload className="w-8 h-8 text-neutral-400 dark:text-neutral-300" />
                  </div>
                  <div>
                    <p className="text-base font-medium text-neutral-700 dark:text-neutral-200 mb-2">
                      Choose a file or drag & drop it here.
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                      txt, docx, pdf, jpeg, xlsx - Up to 50MB
                    </p>
                    <button
                      type="button"
                      onClick={handleBrowseClick}
                      className="px-6 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-200 bg-white dark:bg-neutral-600 border border-neutral-300 dark:border-neutral-500 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                    >
                      Browse files
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
                    <HiCheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-base font-medium text-neutral-700 dark:text-neutral-200 mb-1">
                      File uploaded successfully!
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 break-all">
                      {selectedFile.name}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                      {formatFileSize(selectedFile.size)}
                    </p>
                    <button
                      type="button"
                      onClick={removeFile}
                      className="mt-3 px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/50 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-200"
                    >
                      Remove File
                    </button>
                  </div>
                </div>
              )}
            </div>

            {error && (
              <div className="mt-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg p-3">
                <p className="text-sm text-red-600 dark:text-red-400">
                  {error}
                </p>
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-neutral-900 dark:text-neutral-200 mb-2">
              Description
            </label>
            <textarea
              rows={6}
              placeholder="Descript your experience here!"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 border border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              type="button"
              className="px-6 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-200 bg-white dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Save as Draft
            </button>
            <button
              type="button"
              className="px-6 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-200 bg-white dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Reset Data
            </button>
            <button
              type="submit"
              className="px-6 py-3 text-sm font-medium text-white bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-500 dark:focus:ring-neutral-300 transition-colors duration-200 sm:ml-auto"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
