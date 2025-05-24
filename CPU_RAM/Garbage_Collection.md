
Garbage Collection (GC) trong JavaScript là cơ chế tự động giúp quản lý bộ nhớ.
Mục tiêu chính là giải phóng bộ nhớ chiếm dụng bởi các đối tượng hoặc giá trị không còn được tham chiếu (unreachable).
Điều này đảm bảo rằng chương trình không bị lãng phí tài nguyên.

1. Khái niệm cơ bản:

    a, Bộ nhớ được cấp phát tự động khi bạn tạo ra biến, đối tượng hoặc hàm.
    b, Bộ nhớ được thu hồi tự động khi những giá trị đó không còn cần thiết.
    c, JavaScript sử dụng một thuật toán phổ biến gọi là Mark-and-Sweep để thực hiện garbage collection.

2. Cơ chế hoạt động:

    Thuật toán Mark-and-Sweep:
        a, Mark (đánh dấu):
            Garbage Collector sẽ bắt đầu từ Root Objects (như window hoặc global trong Node.js).
            Nó đánh dấu tất cả các đối tượng mà các root này tham chiếu đến là "reachable" (còn được sử dụng).
        b, Sweep (quét):
            Các đối tượng không được đánh dấu là "reachable" sẽ được coi là "unreachable".
            Bộ nhớ của các đối tượng "unreachable" sẽ được thu hồi.

3. Khi nào một đối tượng bị coi là unreachable?

    a, Một đối tượng sẽ bị coi là unreachable khi:
        Không có bất kỳ biến hoặc hàm nào tham chiếu đến nó.
        Nó nằm ngoài phạm vi (scope).

4. Lỗi thường gặp với Garbage Collection:
    1. Vòng tham chiếu (Circular Reference):
        a, Các đối tượng tham chiếu qua lại lẫn nhau nhưng không còn được sử dụng.
        b, JavaScript hiện nay vẫn xử lý được vòng tham chiếu nhờ thuật toán tối ưu.

    2. Memory Leak (Rò rỉ bộ nhớ):
        a, Các trường hợp phổ biến gây rò rỉ bộ nhớ:
        b, Biến toàn cục không cần thiết:
        c, Closure giữ tham chiếu không cần thiết:
        d, Event Listeners không được xóa:

5. Garbage Collection không đồng bộ:

    a, Garbage Collector không chạy liên tục mà chỉ chạy khi:
        Bộ nhớ sử dụng vượt ngưỡng.
        Thời gian CPU rảnh rỗi.
        Vì vậy, nếu chương trình tiêu tốn nhiều bộ nhớ, Garbage Collection có thể không giải phóng ngay lập tức mà cần thời gian.

6. Cách tốt nhất để quản lý bộ nhớ:

    a, Giải phóng biến không cần thiết:
        Sử dụng let hoặc const thay vì var để tránh biến toàn cục.
        Gán null hoặc undefined cho các biến không còn cần thiết
        Xóa Event Listeners khi không còn cần:

    b, Cẩn thận với Closures:
        Đừng giữ tham chiếu không cần thiết trong closures.
        Dùng WeakMap hoặc WeakSet:

    c, Các tham chiếu trong WeakMap hoặc WeakSet không bị giữ lại trong garbage collection

    1. Cơ chế Garbage Collection hoạt động như thế nào?
        1.1. Quản lý bộ nhớ trong JavaScript
            a, JavaScript runtime (V8 của Chrome hoặc Node.js) chia bộ nhớ thành hai phần chính:
            b, Stack: Chứa các giá trị nguyên thuỷ (primitive values) như number, string, boolean. Kích thước nhỏ và dễ quản lý.
            c, Heap: Chứa các đối tượng phức tạp như object, array, function. Đây là nơi Garbage Collection hoạt động chủ yếu.
            d, Khi một giá trị mới được tạo, trình runtime sẽ:
            e, Cấp phát vùng nhớ trên heap hoặc stack.
            f, Tham chiếu (reference) đến giá trị đó được tạo ra để sử dụng.

        1.2. Cơ chế phát hiện và thu hồi bộ nhớ
            a, GC sử dụng thuật toán Mark-and-Sweep để xác định đối tượng nào không còn được sử dụng:
                Marking (đánh dấu):
                    GC bắt đầu từ Root Objects như global, window (trong trình duyệt).
                    Nó lần theo các tham chiếu (references) đến các đối tượng khác.
                    Đối tượng nào không thể truy cập từ root sẽ bị coi là "unreachable".
                Sweeping (quét):
                    Những đối tượng "unreachable" bị xóa khỏi heap, giải phóng bộ nhớ.

    2. Làm sao GC biết bộ nhớ tràn hoặc thiếu ?
        2.1. Phát hiện bộ nhớ tràn
            a, Bộ nhớ tràn xảy ra khi:
                Quá nhiều đối tượng được tạo trong thời gian ngắn, vượt quá giới hạn heap.
                Các đối tượng không được giải phóng do rò rỉ bộ nhớ.
            b, Các công cụ runtime sẽ theo dõi:
                Tỷ lệ sử dụng heap: Nếu heap gần đầy, GC sẽ được kích hoạt để giải phóng bộ nhớ.
                Tần suất GC chạy: Nếu GC chạy quá thường xuyên, điều đó báo hiệu rằng chương trình đang tiêu tốn quá nhiều bộ nhớ.

        2.2. Rò rỉ bộ nhớ (Memory Leak)
            a, Rò rỉ xảy ra khi một đối tượng không còn được sử dụng nhưng vẫn bị tham chiếu.
            b, Closure giữ tham chiếu không cần thiết.
            c, Event Listener không được xóa.

        2.3. Phát hiện và xử lý
            a, JavaScript runtime sử dụng các thuật toán như:
                Generational GC:
                    Bộ nhớ được chia thành các thế hệ:
                        Young Generation: Chứa các đối tượng mới tạo.
                        Old Generation: Chứa các đối tượng lâu đời.
                        GC thường xuyên dọn dẹp các đối tượng trong Young Generation, vì chúng có xu hướng không được sử dụng sau một thời gian ngắn.

                Incremental GC:
                    Thay vì dọn dẹp toàn bộ heap một lúc (gây giật lag), GC dọn dẹp từng phần nhỏ.
                Idle-time GC:
                    Chạy khi CPU không bận rộn để không ảnh hưởng đến hiệu suất ứng dụng.

    3. Làm sao để quản lý và phân bổ bộ nhớ hợp lý?
        3.1. Tự động phân bổ bộ nhớ
            a, Khi một giá trị mới được tạo:
                Nếu là giá trị nguyên thuỷ, nó được cấp phát trên stack.
                Nếu là đối tượng, nó được cấp phát trên heap.

        3.2. Các bước tối ưu quản lý bộ nhớ
            a, Giải phóng tài nguyên không cần thiết:
                Gán giá trị null cho các biến không sử dụng nữa.
                Xóa Event Listeners khi không cần thiết:
            b, Cẩn thận với closures:
                Không giữ tham chiếu không cần thiết trong closures.
            c, Sử dụng WeakMap hoặc WeakSet:
                Tham chiếu trong WeakMap hoặc WeakSet không ngăn GC thu hồi bộ nhớ.
            d, Kiểm tra bộ nhớ với công cụ:
                Sử dụng Chrome DevTools để theo dõi heap và phát hiện rò rỉ bộ nhớ.

    4. Tổng kết
        Garbage Collection giúp tự động hóa quản lý bộ nhớ, nhưng không hoàn toàn "miễn phí".
        Mày cần viết code cẩn thận để tránh rò rỉ bộ nhớ.
        Cơ chế GC hoạt động thông qua các thuật toán như Mark-and-Sweep, Generational GC, và Incremental GC để giữ ứng dụng tối ưu.
        Dùng các công cụ như DevTools để theo dõi bộ nhớ và đảm bảo chương trình không gặp vấn đề hiệu suất.

    3. So sánh Stack và Heap

        Tiêu chí	                                Stack	                                                            Heap
        Cấu trúc	                                LIFO (Last In, First Out)	                                        Không có cấu trúc cố định
        Dữ liệu lưu trữ	                            Biến nguyên thuỷ.                                                   Đối tượng (object), mảng (array)
                                                    Tham chiếu đến đối tượng.                                                   
        Kích thước	                                Nhỏ, cố định.	                                                    Lớn, linh hoạt
        Quản lý	                                    Tự động (theo phạm vi hàm, block)	                                Thông qua Garbage Collection hoặc thủ công
        Tốc độ	                                    Nhanh (do có cấu trúc LIFO)	                                        Chậm hơn (do cần tìm kiếm trong vùng nhớ)
        Thời gian tồn tại	                        Biến mất khi phạm vi (scope) kết thúc	                            Tồn tại cho đến khi Garbage Collection giải phóng
        Khả năng rò rỉ	                            Hiếm khi xảy ra	                                                    Dễ bị rò rỉ nếu không quản lý đúng cách