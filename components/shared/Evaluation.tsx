"use client";
import {
  AlertCircle,
  ArrowRight,
  Calendar,
  CheckCircle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Maximize2,
  Minimize2,
  Search,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import React, { useState } from "react";
import CircularProgress from "./CircularProgress";
import { Button } from "../ui/button";

export default function Evaluation() {
  const [zoom, setZoom] = useState(60);
  const [expandedCriteria, setExpandedCriteria] = useState<string | null>(null);
  const [showDetailedEvaluation, setShowDetailedEvaluation] = useState(false);
  const [isClose, setIsClose] = useState(true);

  const toggleCriteria = (criteria: string) => {
    if (expandedCriteria === criteria) {
      setExpandedCriteria(null);
    } else {
      setExpandedCriteria(criteria);
    }
  };

  const criteriaData = [
    {
      id: "A",
      score: 7,
      total: 10,
      title: "Understanding Knowledge Questions",
      color: "text-green-500",
      progressColor: "#10B981",
    },
    {
      id: "B",
      score: 5,
      total: 10,
      title: "Understanding Knowledge Questions",
      color: "text-yellow-500",
      progressColor: "#FACC00",
    },
    {
      id: "C",
      score: 3,
      total: 10,
      title: "Understanding Knowledge Questions",
      color: "text-orange-500",
      progressColor: "#FF0000",
    },
  ];
  return (
    <>
      <main className="flex-1 p-6 flex justify-center items-start gap-10 mx-auto xl:flex-row flex-col mt-16 lg:mt-0 w-screen lg:pl-32">
        <div
          className={`flex-1 rounded-lg shadow-lg ${
            showDetailedEvaluation
              ? "xl:h-[80vh] h-[50rem] xl:max-w-[35rem]"
              : "xl:h-[70vh] h-0 w-full lg:max-w-4xl"
          }`}
        >
          <div
            className={`flex justify-between items-center bg-gray-100 p-4 ${
              showDetailedEvaluation ? "rounded-t-lg" : "rounded-lg"
            }`}
          >
            <h2 className="text-[1rem] font-semibold">
              IB Economic Paper IA2 . pdf
            </h2>
            {isClose ? (
              <div className="flex items-center space-x-2">
                {showDetailedEvaluation ? (
                  <div className="flex items-center space-x-2">
                    <ZoomOut
                      size={18}
                      onClick={() => setZoom(Math.max(zoom - 10, 10))}
                      className="cursor-pointer"
                    />
                    <span>{zoom}%</span>
                    <ZoomIn
                      size={18}
                      onClick={() => setZoom(Math.min(zoom + 10, 200))}
                      className="cursor-pointer"
                    />
                  </div>
                ) : (
                  ""
                )}
                <Button
                  variant="outline"
                  className="text-purple-600 hover:text-blue-800 flex gap-1 bg-white rounded-full px-3 py-2 items-center"
                  onClick={() =>
                    setShowDetailedEvaluation(!showDetailedEvaluation)
                  }
                >
                  {showDetailedEvaluation ? (
                    <Minimize2 size={16} className="xl:block hidden" />
                  ) : (
                    <Maximize2 size={16} className="xl:block hidden" />
                  )}
                  <span className="lg:hidden flex items-center gap-2">
                    {showDetailedEvaluation ? (
                      "Close"
                    ) : (
                      <>
                        <span>Expand & View </span>
                        <ArrowRight size={18} />
                      </>
                    )}
                  </span>
                </Button>
              </div>
            ) : (
              <div>
                <Button
                  variant={"outline"}
                  className="text-purple-600 rounded-full flex gap-1"
                  onClick={() => setIsClose(!isClose)}
                >
                  <span>Expand & View File</span>
                  <ArrowRight size={18} />
                </Button>
              </div>
            )}
          </div>
          {isClose && (
            <div
              className={`rounded bg-white overflow-y-auto flex flex-col items-center mx-auto ${
                showDetailedEvaluation
                  ? "xl:h-[80vh] h-[40rem] max-w-[35rem] p-10"
                  : "xl:h-[70vh] h-[0rem] lg:max-w-4xl xl:p-10"
              }`}
            >
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          )}
        </div>
        <div className="min-w-[20rem] lg:w-[55rem] xl:w-[30rem] space-y-4">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex justify-between items-center w-full">
              <div>
                <h2 className="text-lg font-semibold">Overall Score</h2>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold mr-2">Remark :</span>
                  <span className="text-2xl font-bold text-green-500">
                    Good
                  </span>
                </div>
                <p className="text-sm text-gray-500 flex items-center">
                  <Calendar size={14} className="mr-1" />
                  Evaluated on 12 jul 2024
                </p>
              </div>
              <div className="relative w-20 h-20">
                <CircularProgress securedValue={13} maxValue={20} size={80} />
              </div>
            </div>
          </div>

          {criteriaData.map((criteria) => (
            <div
              key={criteria.id}
              className="bg-white rounded-lg shadow-lg p-4"
              onClick={() => {
                toggleCriteria(criteria.id);
                setShowDetailedEvaluation(true);
              }}
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleCriteria(criteria.id)}
              >
                <div className="flex items-center">
                  <div className="relative w-12 h-12 mr-4">
                    <CircularProgress
                      securedValue={criteria.score}
                      maxValue={criteria.total}
                      size={50}
                      progressColor={criteria.progressColor}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Criteria {criteria.id}:</h3>
                    <p className="text-sm">{criteria.title}</p>
                  </div>
                </div>
                {expandedCriteria === criteria.id ? (
                  <ChevronUp size={24} />
                ) : (
                  <ChevronDown size={24} />
                )}
              </div>
              {expandedCriteria === criteria.id && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600 mb-4">
                    The essay identifies and focuses on the knowledge question
                    regarding the resolvability of disputes over knowledge
                    claims within disciplines.
                  </p>
                  <h4 className="font-semibold mb-2">Strengths</h4>
                  <div className="rounded-xl border border-green-400 p-2 mb-2">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle2
                          className="w-5 h-5 text-white mr-2 flex-shrink-0 mt-1"
                          fill="#00ff00"
                        />
                        <span>
                          Demonstrates a good understanding of the prescribed
                          title and the associated knowledge questions.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2
                          className="w-5 h-5 text-white mr-2 flex-shrink-0 mt-1"
                          fill="#00ff00"
                        />
                        <span>
                          Addresses the nature of disputes in both the Natural
                          Sciences and Human Sciences effectively.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h4 className="font-semibold mb-2">Scope of Improvement</h4>
                  <div className="rounded-xl border border-yellow-400 p-2 mb-2">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <AlertCircle
                          className="w-5 h-5 text-white mr-2 flex-shrink-0 mt-1"
                          fill="#facc15"
                        />
                        <span>
                          Could provide more specific examples to support the
                          arguments.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle
                          className="w-5 h-5 text-white mr-2 flex-shrink-0 mt-1"
                          fill="#facc15"
                        />
                        <span>
                          Consider exploring counter-arguments in more depth.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}

          <button
            className="w-full bg-purple-100 text-purple-600 py-2 rounded-lg flex items-center justify-center"
            onClick={() => {
              toggleCriteria("A");
              if (showDetailedEvaluation) {
                setShowDetailedEvaluation(false);
              } else {
                setShowDetailedEvaluation(true);
              }
            }}
          >
            Check detailed Evaluation
            <ChevronDown className="ml-2 w-4 h-4" />
          </button>
        </div>
      </main>
    </>
  );
}
