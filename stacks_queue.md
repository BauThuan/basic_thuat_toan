1. STACKS (Ngăn xếp)
    - Định nghĩa:
        * Stack là một cấu trúc dữ liệu tuân theo nguyên tắc LIFO (Last In, First Out). Phần tử được thêm vào sau cùng sẽ được lấy ra đầu tiên.

    - Cách thức hoạt động:
        * Stack có hai thao tác chính:
            Push: Thêm phần tử vào đầu ngăn xếp.
            Pop: Lấy phần tử ở đầu ngăn xếp ra (và xóa nó khỏi ngăn xếp).
        
        Ngoài ra, nó có thể hỗ trợ:
            Peek/Top: Xem phần tử trên cùng nhưng không xóa.
            IsEmpty: Kiểm tra xem stack có rỗng không.

2. QUEUE (Hàng đợi)
    - Định nghĩa:
        Queue là một cấu trúc dữ liệu tuân theo nguyên tắc FIFO (First In, First Out). Phần tử nào được thêm vào đầu tiên sẽ được xử lý đầu tiên.

    - Cách thức hoạt động:
        * Queue có hai thao tác chính:
            Enqueue: Thêm phần tử vào cuối hàng đợi.
            Dequeue: Lấy phần tử ở đầu hàng đợi ra (và xóa nó khỏi hàng đợi).
        * Ngoài ra, nó có thể hỗ trợ:
            Peek/Front: Xem phần tử ở đầu hàng đợi nhưng không xóa.
            IsEmpty: Kiểm tra xem queue có rỗng không.

3. Ứng dụng thực tế:
    - Stack:
        Kiểm tra dấu ngoặc hợp lệ trong chuỗi ({[()]}).
        Duyệt cây nhị phân (binary tree) bằng phương pháp DFS (Depth First Search).
    - Queue:
        Quản lý tác vụ trong hệ điều hành.
        Duyệt đồ thị bằng phương pháp BFS (Breadth First Search).

4. So sánh

Đặc điểm	                 Stack	                            Queue
Nguyên tắc	                 LIFO (Last In, First Out)	        FIFO (First In, First Out)
Thao tác thêm	             Push	                            Enqueue
Thao tác lấy ra	             Pop	                            Dequeue
Ứng dụng thực tế	         Undo/Redo, hàm gọi đệ quy	        Xếp hàng, xử lý in ấn

5. Sự khác biệt giữa Array và Linked List

    Array:
        Là gì: Một cấu trúc dữ liệu lưu trữ các phần tử trong các ô liên tiếp nhau trong bộ nhớ.
    Ưu điểm:
        Truy cập phần tử: Rất nhanh, truy cập trực tiếp bằng chỉ số (O(1)).
        Đơn giản: Dễ sử dụng và phổ biến.
    Nhược điểm:
        Kích thước cố định: Nếu cần thêm phần tử mà vượt kích thước ban đầu, phải tạo mảng mới và sao chép dữ liệu.
        Chèn/Xóa ở giữa hoặc đầu mảng: Chậm (O(n)), vì phải di chuyển phần tử.
    Linked List:
        Là gì: Một danh sách các nút (nodes) mà mỗi nút chứa dữ liệu và một con trỏ trỏ đến nút tiếp theo.
    Ưu điểm:
        Chèn/Xóa: Rất nhanh ở đầu/cuối danh sách (O(1)).
        Kích thước động: Dễ mở rộng khi cần thêm phần tử.
    Nhược điểm:
        Truy cập phần tử: Chậm (O(n)), vì phải duyệt tuần tự từ đầu danh sách.
        Chi phí bộ nhớ cao hơn: Do cần lưu cả dữ liệu và con trỏ.
6. Stack và cách lựa chọn
    Stack:
        Hoạt động theo nguyên tắc LIFO (Last In, First Out).
    Các thao tác chính:
        Push: Thêm phần tử vào đỉnh stack.
        Pop: Lấy phần tử từ đỉnh stack.
        Peek: Xem phần tử trên đỉnh mà không xóa.
    Dùng Array khi nào?
        Khi mày biết trước kích thước stack hoặc kích thước stack không thay đổi nhiều.
        Khi mày cần truy cập ngẫu nhiên vào các phần tử (hiếm gặp trong Stack).
        Ví dụ: Duyệt toán tử trong biểu thức số học.

Dùng Linked List khi nào?
Khi mày cần một stack với kích thước thay đổi linh hoạt.
Khi thao tác chèn/xóa xảy ra thường xuyên, vì Linked List làm việc này rất nhanh (O(1)).
Ví dụ: Thực hiện thao tác undo/redo trong ứng dụng.

7. Queue và cách lựa chọn

    Queue:
        Hoạt động theo nguyên tắc FIFO (First In, First Out).
    Các thao tác chính:
        Enqueue: Thêm phần tử vào cuối queue.
        Dequeue: Lấy phần tử từ đầu queue.
    Dùng Array khi nào?
        Khi kích thước của queue là nhỏ hoặc cố định.
        Khi mày không cần thao tác thêm/xóa nhiều ở đầu mảng (vì shift() chậm, O(n)).
        Ví dụ: Xếp hàng chờ trong ứng dụng nhỏ.

    Dùng Linked List khi nào?
        Khi kích thước queue thay đổi linh hoạt hoặc rất lớn.
        Khi thao tác chèn/xóa đầu/cuối xảy ra thường xuyên (Linked List làm rất nhanh, O(1)).
        Ví dụ: Hệ thống xử lý tác vụ theo thời gian thực (real-time task processing).

8. Tổng kết: Khi nào chọn Array hoặc Linked List?

Tình huống	                                    Array	                    Linked List
Kích thước cố định hoặc nhỏ	                    ✅	                       ❌
Kích thước thay đổi linh hoạt	                ❌	                       ✅
Truy cập ngẫu nhiên	                            ✅	                       ❌
Chèn/Xóa ở giữa/đầu/cuối	                    ❌ (O(n))	               ✅ (O(1) ở đầu/cuối)
Bộ nhớ tiêu tốn	                                ✅ (tiết kiệm hơn)	       ❌ (tốn hơn do lưu con trỏ)