from book import Book
from library import Library

class User():
    
    def __init__(self, name) -> None:
        self.name = name
        self.mybooks = {}

    def user_rent_book(self, book: Book, lib: Library):
        
        bookRes = book.rent_book()
        libRes = lib.search_book(book)
               
        if bookRes and libRes:
            self.mybooks[book.isbn] = book.title
            print(f"{self.name}さんは{book.title}を借りました。\r\n{self.name}さんのブックリスト: {self.mybooks}")
        else:        
            print(f"{self.name}さんは{book.title}を借りれませんでした。\r\n{self.name}さんのブックリスト: {self.mybooks}")
    
    def user_return_book(self, book: Book, lib: Library):

        return_book = self.mybooks.get(book.isbn)
        bookRes = lib.search_book(book)

        if return_book and bookRes:
            book.return_book()
            print(f"{self.name}さんは{book.title}を返却しました。\r\n{self.name}さんのブックリスト: {self.mybooks}")
        
        else:
            print(f"{self.name}さんは{book.title}を貸りていません。\r\n{self.name}さんのブックリスト: {self.mybooks}")
        
            