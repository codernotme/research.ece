import { mutation } from '../convex/_generated/server';

interface JournalData {
  date?: string;
  type: string;
  title: string;
  authors: string;
  firstAuthor: string;
  coAuthors: number;
  journalName: string;
  paymentType: string;
  volume: string;
  year: string;
  pages: string;
  url: string;
  isbn: string;
  pdf: string;
}

export const create = mutation(async ({ db }, { data }: { data: JournalData }) => {
  const journalData = {
    date: data.date,
    type: data.type,
    title: data.title,
    authors: data.authors,
    firstAuthor: data.firstAuthor,
    coAuthors: Number(data.coAuthors),
    journalName: data.journalName,
    paymentType: data.paymentType,
    volume: data.volume,
    year: Number(data.year),
    pages: data.pages,
    url: data.url,
    isbn: data.isbn,
    pdf: data.pdf
  };
  await db.insert("journals", journalData);
});
