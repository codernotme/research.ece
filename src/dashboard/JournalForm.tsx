"use client";

import { useState, useEffect } from "react";
import { CalendarIcon } from "lucide-react";
import { cn } from "../lib/utils";
import { format } from "date-fns";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Label } from "../components/ui/label";
import { Calendar } from "../components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
export default function Component() {
  const [date, setDate] = useState<Date>();
  const saveJournal = useMutation(api.journal.create);

  useEffect(() => {
    const savedData = localStorage.getItem("journalFormData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      Object.keys(parsedData).forEach((key) => {
        const input = document.querySelector(`[name="${key}"]`);
        if (input) {
          (input as HTMLInputElement).value = parsedData[key];
        }
      });
      if (parsedData.date) {
        setDate(new Date(parsedData.date));
      }
    }
  }, []);

  const onSave = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries()) as any;
    data.date = date ? date.toISOString() : "";
    localStorage.setItem("journalFormData", JSON.stringify(data));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries()) as any;
    data.coAuthors = parseInt(data.coAuthors, 10);
    data.date = date ? date.toISOString() : "";

    const pdfFile = formData.get("pdf") as File;
    const reader = new FileReader();
    reader.onloadend = async () => {
      data.pdf = reader.result;
      await saveJournal({ data });
      localStorage.removeItem("journalFormData");
    };
    reader.readAsDataURL(pdfFile);
  };

  return (
    <div className="min-h-screen p-8 w-full">
      <Card className=" w-full">
        <CardHeader>
          <CardTitle>
            Papers Published in National/International Journals
          </CardTitle>
          <CardDescription>
            (Paid Journals shall not be considered for Credit Points)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} onChange={onSave} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label>Type</Label>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="sci"
                      name="type"
                      value="sci"
                      required
                      title="Select the type of journal"
                    />
                    <Label htmlFor="sci">In SCI Journals</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="scopus"
                      name="type"
                      value="scopus"
                      title="Select the type of journal"
                      required
                    />
                    <Label htmlFor="scopus">In Scopus Indexed Journals</Label>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  (Note: The Publications mentioned in SCI Journals not to be
                  included again in Scopus Indexed Journals.)
                </p>
              </div>

              <div>
                <Label htmlFor="title">Title of the Paper</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Enter the title of your paper"
                  required
                />
              </div>

              <div>
                <Label htmlFor="authors">Author(s)</Label>
                <Input
                  id="authors"
                  name="authors"
                  placeholder="Enter author names (separated by commas)"
                  required
                />
              </div>

              <div>
                <Label>Are you the First/Sole Author / Main Supervisor</Label>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="first-author-yes"
                      name="firstAuthor"
                      value="Yes"
                      title="Select if you are the first author"
                      required
                    />
                    <Label htmlFor="first-author-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="first-author-no"
                      name="firstAuthor"
                      value="No"
                      title="Select if you are not the first author"
                      required
                    />
                    <Label htmlFor="first-author-no">No</Label>
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="coAuthors">No. of Co-authors</Label>
                <Select name="coAuthors">
                  <SelectTrigger id="coAuthors">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5+</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground mt-1">
                  (Note: If you are not the First/Sole Author / Main Supervisor,
                  Please include yourself in the No. of Co-authors)
                </p>
              </div>

              <div>
                <Label htmlFor="journalName">Name of the Journal</Label>
                <Input
                  id="journalName"
                  name="journalName"
                  placeholder="Enter journal name"
                  required
                />
              </div>

              <div>
                <Label>Paid Journal or Unpaid</Label>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="paid"
                      name="paymentType"
                      value="paid"
                      title="Select if the journal is paid"
                      required
                    />
                    <Label htmlFor="paid">Paid</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="unpaid"
                      name="paymentType"
                      value="unpaid"
                      title="Select if the journal is unpaid"
                      required
                    />
                    <Label htmlFor="unpaid">Unpaid</Label>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  (Note: Paid Journals shall not be considered for Credit
                  Points)
                </p>
              </div>

              <div>
                <Label htmlFor="volume">Volume</Label>
                <Input
                  id="volume"
                  name="volume"
                  placeholder="Enter volume number"
                  required
                />
              </div>

              <div>
                <Label htmlFor="year">Year</Label>
                <Select name="year">
                  <SelectTrigger id="year">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    {[...Array(10)].map((_, i) => (
                      <SelectItem
                        key={i}
                        value={`${new Date().getFullYear() - i}`}
                      >
                        {new Date().getFullYear() - i}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="pages">Pages</Label>
                <Input
                  id="pages"
                  name="pages"
                  placeholder="Enter page range"
                  required
                />
              </div>

              <div>
                <Label>Date of Publication</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label htmlFor="url">URL</Label>
                <Input
                  id="url"
                  name="url"
                  type="url"
                  placeholder="Enter publication URL"
                  required
                />
              </div>

              <div>
                <Label htmlFor="isbn">ISBN No.</Label>
                <Input
                  id="isbn"
                  name="isbn"
                  placeholder="Enter ISBN number"
                  required
                />
              </div>

              <div>
                <Label htmlFor="pdf">Firstpage PDF</Label>
                <div className="mt-2">
                  <Input
                    id="pdf"
                    name="pdf"
                    type="file"
                    accept=".pdf"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <Button type="submit">Save</Button>
              <Button type="button" variant="secondary">
                Submit
              </Button>
            </div>
          </form>

          <p className="mt-6 text-sm text-red-500">
            Note: Please Save your details by clicking on Save Button before
            proceeding to the next page.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
