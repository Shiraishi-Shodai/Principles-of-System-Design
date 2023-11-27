class Book():

    def __init__(self, title, author, isbn, check_out_status=False) -> None:
        self.title = title
        self.author = author
        self.isbn = isbn
        self.check_out_status = check_out_status
        
    def rent_book(self):

        if self.check_out_status:
            return False
        
        self.check_out_status = True
        return True
    
    def return_book(self):
        self.check_out_status = False