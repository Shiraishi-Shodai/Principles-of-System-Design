from book import Book

class Library():
    
    def __init__(self) -> None:
        self.books = {}

    def add_book(self, book: Book):
        
        self.books[book.isbn] = book.title
        print(f'ISBN: {book.isbn}, {book.title}を追加しました')        
    
    def delete_book(self, book: Book):
        
        res = self.search_book(book)        
        if res:
            print(f'{res.title}を削除しました')        
            
    def search_book(self, book: Book):
        
        res = self.books.get(book.isbn)
        return res

    
    
    