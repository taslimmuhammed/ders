import React, { useContext, useState } from 'react';
import { ethers } from 'ethers';
import { EthersContext, useEthersContext } from '@/context/EthersContext';
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, X } from 'lucide-react';
import { toast } from 'sonner';

const CreateAlertModal = ({ contractId, contractData, onAlertCreated }) => {
    const { createAlert } = useContext(EthersContext);
    const [open, setOpen] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const form = useForm({
        defaultValues: {
            description: "",
            stake: "",
            isHighPriority: false
        }
    });

    const handleFileSelect = (e) => {
        const files = Array.from(e.target.files);
        setSelectedFiles(prev => [...prev, ...files]);
        // Reset input value to allow selecting the same file again
        e.target.value = '';
    };

    const removeFile = (index) => {
        setSelectedFiles(prev => prev.filter((_, i) => i !== index));
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const files = Array.from(e.dataTransfer.files);
        setSelectedFiles(prev => [...prev, ...files]);
    };

    const onSubmit = async (data) => {
        await createAlert(contractId, data.isHighPriority, data.stake, data.description, selectedFiles)
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline">Create Alert</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Create New Alert</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Describe the issue or vulnerability..."
                                            className="min-h-[100px]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Provide a detailed description of the alert
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormItem>
                            <FormLabel>Upload Files</FormLabel>
                            <FormControl>
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <div
                                        onDragOver={handleDragOver}
                                        onDrop={handleDrop}
                                        className="flex flex-col items-center justify-center w-full px-4 py-6 border border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors"
                                    >
                                        <Upload className="w-8 h-8 text-gray-400 mb-2" />
                                        <p className="text-sm text-gray-600">Drag and drop files or</p>
                                        <label className="mt-2 inline-flex items-center px-3 py-1.5 bg-primary text-primary-foreground rounded-md cursor-pointer hover:bg-primary/90">
                                            Browse Files
                                            <input
                                                type="file"
                                                multiple
                                                className="hidden"
                                                onChange={handleFileSelect}
                                            />
                                        </label>
                                    </div>

                                    {selectedFiles.length > 0 && (
                                        <div className="mt-4 space-y-2">
                                            {selectedFiles.map((file, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center justify-between p-2 bg-muted rounded-md"
                                                >
                                                    <span className="text-sm truncate max-w-[200px]">
                                                        {file.name}
                                                    </span>
                                                    <Button
                                                        type="button"
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() => removeFile(index)}
                                                    >
                                                        <X className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </FormControl>
                            <FormDescription>
                                Upload one or more files related to the alert
                            </FormDescription>
                        </FormItem>

                        <FormField
                            control={form.control}
                            name="stake"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Stake Amount (in wei)</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            min={parseInt(contractData.minStake)}
                                            placeholder="Enter stake amount in wei"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Minimum stake required: {parseInt(contractData.minStake)} wei
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="isHighPriority"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel>
                                            High Priority Alert
                                        </FormLabel>
                                        <FormDescription>
                                            High priority alerts require double the stake but offer double rewards
                                        </FormDescription>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full" >
                            Create Alert
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default CreateAlertModal;