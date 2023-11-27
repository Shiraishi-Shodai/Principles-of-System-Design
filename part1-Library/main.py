from user import User
from book import Book
from library import Library

def main():
    
    user1 = User("太郎")
    user2 = User("たくろう")
    book1 = Book("浦島太郎", "松谷みよ子", 1)
    book2 = Book("桃太郎", "楠山正雄", 2)
    
    # 本の追加
    lib = Library()
    lib.add_book(book1)
    print()

    # 貸出
    print('貸出')
    user1.user_rent_book(book2, lib)
    user2.user_rent_book(book2, lib)
    print()

    # 返却
    print('返却')
    user1.user_return_book(book2, lib)
    user2.user_return_book(book2, lib)

if __name__ == "__main__":
    main()