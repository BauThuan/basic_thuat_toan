- Cấu trúc dữ liệu (Data Structure) là một cách tổ chức, quản lý và lưu trữ dữ liệu trong bộ nhớ máy tính để có thể sử dụng một cách hiệu quả. Nó quyết định cách dữ liệu được sắp xếp và cách truy cập dữ liệu đó, giúp tối ưu hóa tốc độ và hiệu suất của các thuật toán.
A- Phân loại cấu trúc dữ liệu
    1.Cấu trúc dữ liệu được chia thành 2 loại chính:
        - Cấu trúc dữ liệu cơ bản (Primitive Data Structures): Đây là các kiểu dữ liệu có sẵn trong ngôn ngữ lập trình, chẳng hạn: int, float, char, boolean trong JavaScript, C++, Python, v.v.
    2.Cấu trúc dữ liệu phức tạp (Non-Primitive Data Structures): Gồm các cách tổ chức dữ liệu phức tạp hơn như:
        - Dạng tuyến tính (Linear):
        - Mảng (Array)
        - Danh sách liên kết (Linked List)
        - Ngăn xếp (Stack)
        - Hàng đợi (Queue)
        - Dạng phi tuyến tính (Non-Linear):
        - Cây (Tree)
        - Đồ thị (Graph)
        - Dạng đặc biệt:
        - Bảng băm (Hash Table)
        - Heap (đống)
B- Cách thức hoạt động của cấu trúc dữ liệu
    - RAM, CPU, STORAGE
    - CPU cần truy cập vào RAM và bộ nhớ, nhưng nó có thể truy cập vào RAM và thông tin trong RAM nhanh hơn rất nhiều
    - Bộ nhớ có thể là ổ đĩa, ổ flash, hoặc ổ ở trạng thái rắn
    - Để một máy tính có thể chạy mã, nó cần theo dõi những những thứ như biến, như số, chuỗi, mảng.
    - Các biến này được lưu trữ trong cái mà chúng ta gọi là truy cập ngẫu nhiên, bộ nhớ hoặc RAM
    - Dữ liệu trên bộ nhớ (Storage) là vĩnh viễn hoặc liên tục, vì vậy khi tắt máy tính nó vẫn sẽ ở đó khi bạn bật lại
    - Trong RAM bạn sẽ mất bộ nhớ khi máy tính tắt

=> Cấu trúc dữ liệu là cách ghi nhớ để chúng ta lưu trữ thông tin

C- Static Arrays (Mảng tĩnh), Dynamic Arrays (Mảng động)
    1. Static Arrays (Mảng tĩnh)
        - Mảng tĩnh là loại mảng có kích thước cố định ngay từ khi khởi tạo. Điều này có nghĩa là:
        - Kích thước (số phần tử) của mảng được xác định trước và không thể thay đổi trong suốt thời gian chương trình chạy.
        - Bộ nhớ được cấp phát một lần cho toàn bộ mảng tại thời điểm khởi tạo.
        - Đặc điểm chính:
            +, Kích thước cố định: Mày phải biết số lượng phần tử ngay từ đầu.
            +, Truy cập nhanh: Thời gian truy cập một phần tử là 𝑂(1), vì địa chỉ phần tử được tính trực tiếp dựa trên chỉ số (index).
            +, Không thể mở rộng hoặc thu hẹp: Nếu cần thêm phần tử, mày sẽ phải tạo một mảng mới có kích thước lớn hơn và sao chép dữ liệu từ mảng cũ.
            +, Cấp phát bộ nhớ liên tục: Toàn bộ mảng chiếm một vùng liên tiếp trong RAM.
    2. Dynamic Arrays (Mảng động)
        - Đặc điểm chính:
            +, Kích thước thay đổi được: Có thể thêm hoặc xóa phần tử mà không cần biết trước số lượng phần tử.
            +, Truy cập vẫn nhanh: Thời gian truy cập trung bình O(1).
            +, Quản lý bộ nhớ linh hoạt: Khi thêm phần tử, nếu bộ nhớ không đủ, nó sẽ tự động cấp phát vùng nhớ mới lớn hơn và sao chép dữ liệu từ vùng cũ sang.
            +, Không cần cấp phát liên tục: Không như mảng tĩnh, mảng động có thể tồn tại ở các vùng bộ nhớ không liên tiếp.
