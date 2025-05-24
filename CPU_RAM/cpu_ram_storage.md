1. CPU (Central Processing Unit):
    - CPU là bộ xử lý trung tâm, được xem là "bộ não" của máy tính. Nó chịu trách nhiệm thực thi các lệnh từ phần mềm. CPU thực hiện ba nhiệm vụ chính:
    - Fetch (Lấy lệnh): Lấy dữ liệu/lệnh từ bộ nhớ (RAM hoặc cache).
    - Decode (Giải mã): Giải mã lệnh để biết cần làm gì.
    - Execute (Thực thi): Thực hiện lệnh, như tính toán, di chuyển dữ liệu, hoặc điều khiển các thiết bị khác.
    - CPU hoạt động rất nhanh, thường đo bằng GHz (1 GHz = 1 tỷ chu kỳ/giây). Tuy nhiên, nó cần dữ liệu từ RAM hoặc STORAGE để làm việc.

2. RAM (Random Access Memory):
    - RAM là bộ nhớ tạm thời được CPU sử dụng để lưu trữ dữ liệu và chương trình đang chạy. Đặc điểm của RAM:
    - Tốc độ cao: RAM có tốc độ đọc/ghi nhanh hơn STORAGE rất nhiều, thường đo bằng GB/s.
    - Dữ liệu dễ truy cập: RAM sử dụng cơ chế ngẫu nhiên (random access), cho phép CPU truy cập trực tiếp đến bất kỳ vị trí nào trong RAM mà không cần đọc tuần tự.
    - Tạm thời: Dữ liệu trong RAM sẽ bị mất khi tắt máy.
        Cơ chế hoạt động:
            +, Khi mày mở một chương trình, dữ liệu từ STORAGE (như ổ cứng SSD/HDD) được tải vào RAM.
            +, CPU sau đó truy cập dữ liệu này từ RAM, vì đọc từ RAM nhanh hơn nhiều so với đọc từ STORAGE.

3. STORAGE (Ổ cứng - SSD/HDD):
    - STORAGE là nơi lưu trữ dữ liệu dài hạn, gồm:
            +, HDD (Hard Disk Drive): Dùng đĩa từ và đầu đọc, tốc độ chậm hơn SSD.
            +, SSD (Solid State Drive): Dùng bộ nhớ flash, tốc độ nhanh hơn HDD nhưng vẫn chậm hơn RAM.
    - Cơ chế hoạt động:
            +, Dữ liệu trong STORAGE được lưu trữ theo các khối lớn, thường không phải truy cập ngẫu nhiên như RAM.
            +, Việc đọc/ghi dữ liệu từ STORAGE thường mất thời gian do phải di chuyển dữ liệu qua nhiều tầng (như hệ điều hành, bộ điều khiển).
    - Tại sao RAM nhanh hơn STORAGE?
        Khoảng cách vật lý:
            +, RAM nằm gần CPU hơn nhiều so với STORAGE.
            +, Trong khi STORAGE thường kết nối qua các bus dữ liệu (SATA, NVMe), RAM kết nối trực tiếp qua bus tốc độ cao (như DDR).
    - Kiến trúc phần cứng:
            +, RAM được thiết kế để truy cập ngẫu nhiên, tức là CPU có thể nhảy đến bất kỳ vị trí nào mà không cần tuần tự đọc dữ liệu.
            +, STORAGE (đặc biệt là HDD) phải mất thời gian tìm kiếm dữ liệu trên đĩa vật lý hoặc qua các tầng bộ nhớ trong SSD.
    - Băng thông và độ trễ:
            +, RAM: Băng thông cao hơn (100 GB/s với DDR5 hiện đại), độ trễ thấp.
            +, STORAGE: Băng thông thấp hơn (thường vài GB/s với SSD NVMe), độ trễ cao hơn.
    - Cache của CPU:
            +, Dữ liệu từ RAM được tải trước vào cache của CPU, giúp CPU truy cập nhanh hơn nữa.
            +, STORAGE không có cơ chế tích hợp tương tự.
