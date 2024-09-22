import { readFile } from 'node:fs/promises';
import { Injectable, OnModuleInit } from '@nestjs/common';
import type { Book } from './Book';

@Injectable()
export class BookService implements OnModuleInit {
  private readonly storage: Map<string, Book> = new Map();

  async onModuleInit() {
    await this.loadBooksFromFile();
  }

  private async loadBooksFromFile() {
    const data = await readFile('src/dataset.json', 'utf8');
    const books = JSON.parse(data.toString()) as Book[];
    books.forEach((book) => this.addBook(book));
  }

  addBook(book: Book) {
    this.storage.set(book.isbn, book);
  }

  getBook(isbn: string): Book {
    const book = this.storage.get(isbn);

    if (!book) {
      throw new Error(`Book with ISBN ${isbn} not found`);
    }

    return book;
  }

  getAllBooks(): Book[] {
    return Array.from(this.storage.values()).sort((a, b) =>
      a.title.localeCompare(b.title),
    );
  }

  getBooksOf(author: string): Book[] {
    return this.getAllBooks()
      .filter((book) => book.author === author)
      .sort((a, b) => a.title.localeCompare(b.title));
  }

  remove(isbn: string) {
    this.storage.delete(isbn);
  }

  search(term: string) {
    return Array.from(this.storage.values())
      .filter((book) => book.title.includes(term) || book.author.includes(term))
      .sort((a, b) => a.title.localeCompare(b.title));
  }
}
