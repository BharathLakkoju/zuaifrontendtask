"use client";
import Image from "next/image";
import evaluateDown from "@/public/evaluate-down.png";
import evaluateUp from "@/public/evaluate-up.png";
import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  UploadIcon,
  BookIcon,
  ClockIcon,
  FileTextIcon,
  StarIcon,
  Sparkles,
  Trash,
} from "lucide-react";
import { useDropzone } from "react-dropzone";
import { useFileStore } from "@/store/useFileStore";

export default function Dashboard() {
  const [courseworkType, setCourseworkType] = useState("Report");
  const [subject, setSubject] = useState("Physics HL");
  const [essayTitle, setEssayTitle] = useState("");
  const { files, addFiles, removeFile } = useFileStore();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newFiles = acceptedFiles.filter(
        (file) => file.size <= 25 * 1024 * 1024
      ); // 25MB limit
      const fileInfos = newFiles.map((file) => ({
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified,
        courseworkType,
        subject,
        essayTitle:
          essayTitle === ""
            ? "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            : essayTitle,
      }));
      addFiles(fileInfos);
      console.log(fileInfos);
    },
    [addFiles, essayTitle, courseworkType, subject]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
    maxSize: 25 * 1024 * 1024, // 25MB
  });

  return (
    <div className="min-h-screen p-8 lg:ml-32 mt-20 lg:mt-0">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">
            Hey IB Folks ! Unsure about the quality of your answers?{" "}
            <span className="text-purple-600">We get you.</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="mb-8">
              <CardContent className="p-6">
                <div
                  {...getRootProps()}
                  className={`border-2 border-dashed rounded-lg p-8 mb-6 cursor-pointer flex flex-col items-center justify-center ${
                    isDragActive
                      ? "border-purple-600 bg-purple-50"
                      : "border-gray-300"
                  }`}
                >
                  <input {...getInputProps()} />
                  <UploadIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <span className="text-sm text-gray-600 mb-2">
                    Drag and drop a PDF or click to select files
                  </span>
                  <span className="text-xs text-gray-500 mb-4">
                    *Limit 25 MB per file.
                  </span>
                  <Button
                    variant="outline"
                    className="bg-white text-purple-600 border-purple-600 hover:bg-purple-50 max-w-xs flex items-center justify-center"
                  >
                    Upload your file
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Coursework Type
                      </label>
                      <Select
                        value={courseworkType}
                        onValueChange={setCourseworkType}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Essay">Essay</SelectItem>
                          <SelectItem value="Report">Report</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <Select value={subject} onValueChange={setSubject}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Physics HL">Physics</SelectItem>
                          <SelectItem value="Chemistry HL">
                            Chemistry
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="essay-title"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Enter your essay title*
                    </label>
                    <Input
                      id="essay-title"
                      value={essayTitle}
                      onChange={(e) => setEssayTitle(e.target.value)}
                      placeholder="how nation works...."
                    />
                  </div>
                  <Button className="min-w-sm bg-gray-200 text-gray-800 hover:bg-gray-300 gap-2">
                    <Sparkles size={16} className="text-gray-700" />
                    <span>Evaluate your Score</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-xl font-semibold mb-4">My coursework</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {files.map((file, index) => (
                <Card key={index}>
                  <CardContent className="p-4 flex flex-col justify-between h-full">
                    <div className="flex justify-between items-center overflow-hidden">
                      <span className="font-semibold mb-2 max-w-[200px] text-ellipsis overflow-hidden text-zinc-900">
                        {file.essayTitle}
                      </span>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => removeFile(file.name)}
                        className=""
                      >
                        <Trash className="size-4" />
                      </Button>
                    </div>
                    <span className="text-sm text-gray-600 mb-2 overflow-hidden text-ellipsis whitespace-nowrap max-w-[250px]">
                      {file.name.substring(0, file.name.lastIndexOf("."))}
                    </span>
                    <div className="flex flex-wrap items-center text-sm text-gray-500 space-x-4">
                      <span className="flex items-center">
                        <BookIcon className="w-4 h-4 mr-1" fill="lightgreen" />{" "}
                        {file.subject}
                      </span>
                      <span className="flex items-center">
                        <ClockIcon
                          className="w-4 h-4 mr-1 text-blue-800"
                          fill="lightblue"
                        />{" "}
                        18 min read
                      </span>
                      <span className="text-sm text-gray-600 flex items-center">
                        <FileTextIcon className="w-4 h-4 mr-1 text-blue-600" />{" "}
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 space-x-4 mt-2">
                      <span className="flex items-center">
                        <FileTextIcon className="w-4 h-4 mr-1 text-blue-600" />{" "}
                        2388 words
                      </span>
                      <span className="flex items-center">
                        <StarIcon
                          className="w-4 h-4 mr-1 text-yellow-400"
                          fill="gold"
                        />{" "}
                        7/7
                      </span>
                      <span className="flex items-center">🇬🇧 English</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {files.length >= 1
                ? [1].map((_, index) => (
                    <Card key={index}>
                      <CardContent className="p-4 flex flex-col ">
                        <span className="font-semibold mb-2 max-w-[300px] text-ellipsis overflow-hidden">
                          How does the temperature of a Copper pipe affect the
                        </span>
                        <span className="text-sm text-gray-600 mb-2">
                          How does the temperature of a Copper pipe affect the
                          time it takes a magnet to fall thought
                        </span>
                        <div className="flex flex-wrap items-center text-sm text-gray-500 space-x-4">
                          <span className="flex items-center">
                            <BookIcon
                              className="w-4 h-4 mr-1"
                              fill="lightgreen"
                            />{" "}
                            Physics HL
                          </span>
                          <span className="flex items-center">
                            <ClockIcon
                              className="w-4 h-4 mr-1 text-blue-800"
                              fill="lightblue"
                            />{" "}
                            18 min read
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 space-x-4 mt-2">
                          <span className="flex items-center">
                            <FileTextIcon className="w-4 h-4 mr-1 text-blue-600" />{" "}
                            2388 words
                          </span>
                          <span className="flex items-center">
                            <StarIcon
                              className="w-4 h-4 mr-1 text-yellow-400"
                              fill="gold"
                            />{" "}
                            7/7
                          </span>
                          <span className="flex items-center">🇬🇧 English</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                : [1, 2].map((_, index) => (
                    <Card key={index}>
                      <CardContent className="p-4 flex flex-col ">
                        <span className="font-semibold mb-2 max-w-[300px] text-ellipsis overflow-hidden">
                          How does the temperature of a Copper pipe affect the
                        </span>
                        <span className="text-sm text-gray-600 mb-2">
                          How does the temperature of a Copper pipe affect the
                          time it takes a magnet to fall thought
                        </span>
                        <div className="flex flex-wrap items-center text-sm text-gray-500 space-x-4">
                          <span className="flex items-center">
                            <BookIcon
                              className="w-4 h-4 mr-1"
                              fill="lightgreen"
                            />{" "}
                            Physics HL
                          </span>
                          <span className="flex items-center">
                            <ClockIcon
                              className="w-4 h-4 mr-1 text-blue-800"
                              fill="lightblue"
                            />{" "}
                            18 min read
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 space-x-4 mt-2">
                          <span className="flex items-center">
                            <FileTextIcon className="w-4 h-4 mr-1 text-blue-600" />{" "}
                            2388 words
                          </span>
                          <span className="flex items-center">
                            <StarIcon
                              className="w-4 h-4 mr-1 text-yellow-400"
                              fill="gold"
                            />{" "}
                            7/7
                          </span>
                          <span className="flex items-center">🇬🇧 English</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
            </div>
            <Button variant="link" className="text-purple-600">
              View all
            </Button>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              Explore coursework
            </h2>
            <Tabs defaultValue="all">
              <TabsList className="bg-transparent">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="ia">IA Example</TabsTrigger>
                <TabsTrigger value="ee">EE Example</TabsTrigger>
                <TabsTrigger value="io">IO Example</TabsTrigger>
                <TabsTrigger value="tok">ToK Example</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((_, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2">
                          How does the temperature of a Copper pipe affect the
                          ti...
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          How does the temperature of a Copper pipe affect the
                          time it takes a magnet to fall thought
                        </p>
                        <div className="flex items-center text-sm text-gray-500 space-x-4">
                          <span className="flex items-center">
                            <BookIcon
                              className="w-4 h-4 mr-1 "
                              fill="lightgreen"
                            />{" "}
                            Physics HL
                          </span>
                          <span className="flex items-center">
                            <ClockIcon
                              className="w-4 h-4 mr-1 text-blue-800"
                              fill="lightblue"
                            />{" "}
                            18 min read
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 space-x-4 mt-2">
                          <span className="flex items-center">
                            <FileTextIcon className="w-4 h-4 mr-1 text-blue-600" />{" "}
                            2388 words
                          </span>
                          <span className="flex items-center">
                            <StarIcon
                              className="w-4 h-4 mr-1 text-yellow-400"
                              fill="gold"
                            />{" "}
                            7/7
                          </span>
                          <span className="flex items-center">🇬🇧 English</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="md:col-span-1 hidden md:flex flex-col items-center justify-start">
            <Image
              src={evaluateUp}
              alt="Evaluation illustration"
              className="w-48"
            />
            <Card className="bg-gray-100 text-purple-600 rounded-xl flex flex-col justify-center items-center max-w-[300px]">
              <div className="flex flex-col items-center p-4">
                <span className="text-2xl font-bold mb-4 w-full">
                  Evaluate your x with a single click
                </span>
              </div>
              <Image
                src={evaluateDown}
                alt="Evaluation illustration"
                className="w-64 h-auto"
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
