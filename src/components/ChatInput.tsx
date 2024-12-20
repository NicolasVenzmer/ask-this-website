"use client"

import {Textarea} from "@nextui-org/input";
import {Button} from "@nextui-org/react";
import {Send} from "lucide-react";
import {type useChat} from "ai/react"
import React from "react";

type HandleInputChange = ReturnType<typeof useChat>["handleInputChange"]
type HandleSubmit = ReturnType<typeof useChat>["handleSubmit"]
type SetInput = ReturnType<typeof useChat>["setInput"]

interface ChatInputProps {
    input: string,
    handleInputChange: HandleInputChange,
    handleSubmit: HandleSubmit,
    setInput: SetInput,
    isLoading: boolean,
}

export const ChatInput = ({
                              handleInputChange,
                              input,
                              handleSubmit,
                              setInput,
                              isLoading
                          }: ChatInputProps) => {
    return (
        <div className="z-10 bg-zinc-900 absolute bottom-0 left-0 w-full">
            <div className="mx-2 flex flex-row gap-3 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
                <div className="relative flex h-full flex-1 items-stretch md:flex-col">
                    <div className="relative flex flex-col w-full flex-grow p-4">
                        <form onSubmit={handleSubmit} className="relative">
                            <Textarea
                                onChange={handleInputChange}
                                value={input}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" && !e.shiftKey) {
                                        e.preventDefault()
                                        handleSubmit()
                                        setInput("")
                                    }
                                }}
                                minRows={4}
                                autoFocus
                                placeholder="Enter your question..."
                                className="resize-none bg-zinc-800 hover:bg-zinc-900 rounded-xl text-base"/>
                            {isLoading ? (
                                <svg
                                    className="animate-spin h-5 w-5 mr-3 text-white absolute z-10 border border-border bg-zinc-900 right-2 bottom-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                                    <path d="M4 12a8 8 0 0 1 16 0" fill="none"/>
                                </svg>
                            ) : (
                                <Button
                                    size="sm"
                                    type="submit"
                                    className="absolute z-10 border border-border bg-zinc-900 right-2 bottom-2"
                                >
                                    <Send className="size-5"/>
                                </Button>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}