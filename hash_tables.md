- Hash Table (bảng băm) là một cấu trúc dữ liệu được thiết kế để ánh xạ (map) các key (khóa) với value (giá trị). Nó hoạt động dựa trên một hàm băm (hash function), biến đổi key thành một chỉ số (index) trong một mảng để truy cập dữ liệu nhanh chóng.

<!-- TRONG JAVASCRIPT: const cache = new Map();  --> cách thức tạo 1 cái cache

1. Hash Function:

    -, Khi bạn đưa một key (khóa) vào, một hàm băm (hash function) sẽ được áp dụng để chuyển đổi key này thành một chỉ số (index).
    -, Chỉ số này là vị trí trong một mảng, nơi giá trị tương ứng với key sẽ được lưu trữ.
    -, Ví dụ cơ bản: Key "name" được băm thành chỉ số 3. Giá trị của "name" sẽ được lưu ở vị trí thứ 3 trong mảng.

2. Lưu trữ dữ liệu:

    -, Sau khi có chỉ số từ hàm băm, bảng sẽ lưu cặp key-value tại chỉ số đó trong một mảng bên trong (thường gọi là bucket).
    -, Khi cần truy cập giá trị, chỉ cần băm key lần nữa để tìm ra chỉ số và đọc dữ liệu từ bucket tương ứng.

3. Xử lý xung đột (Collisions):

    -, Xung đột xảy ra khi hai key khác nhau được băm ra cùng một chỉ số.
    -, Hash Table sử dụng các kỹ thuật để xử lý:
    -, Separate chaining: Lưu tất cả các cặp key-value có cùng chỉ số trong một danh sách liên kết (linked list).
    -, Open addressing: Tìm vị trí khác (trống) để lưu giá trị.


5. Mục đích sử dụng của Hash Table
    -, Tìm kiếm nhanh chóng: Khi bạn có key và cần giá trị, Hash Table giúp lấy giá trị rất nhanh nhờ vào chỉ số được tính bởi hash function. Điều này hiệu quả hơn so với việc duyệt tuần tự qua danh sách hoặc mảng.

    -, Lưu trữ dữ liệu theo cặp key-value: Nhiều ứng dụng yêu cầu ánh xạ (mapping) giữa một khóa và một giá trị. Ví dụ:
        +, Từ điển (dictionary): Khóa là từ, giá trị là định nghĩa.
        +, Bảng lưu trữ thông tin người dùng: Khóa là ID người dùng, giá trị là thông tin chi tiết.

    -, Quản lý dữ liệu trong thời gian thực: Trong các ứng dụng cần tra cứu nhanh, ví dụ như:
        +, Bộ nhớ đệm (cache).
        +, Bảng định tuyến (routing table) trong mạng.


6. Tại sao lại cần Hash Table?
    -, Hiệu suất cao:
            +, Hash Table cho phép các thao tác tìm kiếm, thêm, và xóa với thời gian trung bình là O(1), nhanh hơn rất nhiều so với các cấu trúc như danh sách liên kết (O(n)).
    
    -, Linh hoạt và dễ sử dụng:
            +, Nó hỗ trợ ánh xạ dữ liệu trực tiếp từ key sang value mà không cần phải sắp xếp dữ liệu hay duyệt qua từng phần tử.

    -, Ứng dụng rộng rãi:
            +, Hash Table là xương sống của nhiều hệ thống phần mềm lớn, ví dụ: cơ sở dữ liệu, bộ nhớ đệm, và thậm chí là trong trình biên dịch để lưu trữ các biến và hàm.



    => Tóm lại, Hash Table là một công cụ mạnh mẽ giúp lưu trữ và truy cập dữ liệu một cách hiệu quả. Nó đóng vai trò cực kỳ quan trọng trong việc xây dựng các ứng dụng hiệu năng cao. Nếu mày cần hiểu sâu thêm về từng khía cạnh (như xử lý xung đột hay tối ưu hóa hash function), tao sẽ giải thích kỹ hơn.


7. Va chạm trong hàm băm (Hash Collisions)

    -, Nguyên nhân gây ra va chạm trong hàm băm
            +, Va chạm xảy ra do số lượng key khả dĩ (đầu vào) lớn hơn số lượng chỉ số khả dĩ (index) trong bảng băm. Điều này có nghĩa là hai hoặc nhiều key có thể được chuyển đổi thành cùng một chỉ số bởi hàm băm.
    -, Khi xảy ra va chạm trong hàm băm, dữ liệu không được lưu ngẫu nhiên mà sẽ được xử lý bằng một trong các kỹ thuật cụ thể để giải quyết va chạm.
    -, Khi có va chạm, nó làm chậm quá trình đọc và ghi với bảng băm

