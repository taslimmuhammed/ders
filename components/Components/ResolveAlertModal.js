import React, { useContext, useState } from 'react';
import { Upload, X } from 'lucide-react';
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
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { EthersContext } from '@/context/EthersContext';

const ResolveAlertModal = ({alertId, resolved}) => {
  const { resolveAlert } = useContext(EthersContext)
  const [open, setOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const form = useForm({
    defaultValues: {
      description: "",
    }
  });

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(prev => [...prev, ...files]);
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
    await resolveAlert(alertId, files, data.description)
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" disabled={resolved}>Resolve Alert</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Resolve Alert</DialogTitle>
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
                      placeholder="Provide resolution details..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Describe how you resolved the alert
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
                Upload any files related to the resolution
              </FormDescription>
            </FormItem>

            <Button type="submit" className="w-full">
              Resolve Alert
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ResolveAlertModal;