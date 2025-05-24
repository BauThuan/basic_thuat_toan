1. Mảng là gì ?
    - Mảng là một cấu trúc dữ liệu tuyến tính, tức là các phần tử được lưu theo thứ tự liên tiếp trong bộ nhớ.
    - Nó giống như một dãy danh sách mà mỗi phần tử được gắn với một chỉ số (index). Chỉ số này bắt đầu từ 0.

2. Ưu điểm của mạng
    - Truy cập siêu nhanh: Truy cập phần tử bất kỳ bằng chỉ số là O(1) – constant time (thời gian không đổi).
    - Dễ sử dụng: Có trong hầu hết các ngôn ngữ lập trình.

3. Nhược điểm của mảng
    - Chèn/Xoá ở giữa hoặc đầu mảng: Tốn thời gian O(n) vì cần dịch chuyển các phần tử còn lại.
    -  Kích thước cố định (trong ngôn ngữ static như C).

4. Các thao tác thường gặp trong mảng
    Thao tác	                            Miêu tả	                                    Độ phức tạp
    array[i]	                            Truy cập phần tử theo chỉ số	                O(1)
    push(item)	                            Thêm phần tử vào cuối mảng	                    O(1)
    pop()	                                Xoá phần tử cuối mảng	                        O(1)
    unshift(item)	                        Thêm phần tử vào đầu mảng	                    O(n)
    shift()	                                Xoá phần tử ở đầu mảng	                        O(n)
    splice(i, 0, item)	                    Chèn phần tử ở giữa	                            O(n)
    splice(i, 1)	                        Xoá phần tử ở giữa	                            O(n)

5. Tại sao có Big O khác nhau
    - Ví dụ khi dùng unshift("X"), ta phải:
        - Dịch chuyển tất cả các phần tử hiện tại sang phải (tăng index).
        - Thêm "X" vào đầu.
        - Vì vậy, phải duyệt qua toàn bộ mảng → O(n).
        - Trong khi push("E") thì chỉ cần gắn E vào chỗ cuối → O(1).

6. Mảng tĩnh và mảng động là gì?
    - Mảng tĩnh (static array): Là mảng mà khi tạo ra, phải khai báo trước số lượng phần tử.
    - Mảng động (dynamic array): Là mảng có thể thay đổi kích thước trong quá trình chạy chương trình. Khi mày thêm phần tử mới, nó sẽ tự "mở rộng" ra để chứa thêm mà không cần khai báo trước bao nhiêu phần tử.

    - Mảng tĩnh thì nhanh nhưng cố định kích thước.
    - Mảng động linh hoạt, có thể tăng kích thước, nhưng đôi khi phải sao chép lại – gây tốn thời gian.
    - JavaScript dùng mảng động.
    - push() thường là O(1), nhưng nếu mảng bị resize thì là O(n) -> 
        * Giải thích (
                Giả sử mảng đang chứa đủ số phần tử được cấp phát (VD: tối đa là 4), 
                khi push() thêm 1 phần tử, tạo một vùng nhớ mới lớn hơn (thường là gấp đôi), 
                Sao chép toàn bộ mảng cũ (4 phần tử) vào vùng nhớ mới, 
                Thêm phần tử mới (5) vào, Giải phóng vùng nhớ cũ,  
                Tốn n bước để sao chép (n là số phần tử đang có trong mảng).
        => Lúc này push() không còn là O(1) nữa mà là O(n).).

7. Tổng kết
    - Mảng là cấu trúc dữ liệu cực kỳ đơn giản, nhưng mạnh mẽ và phổ biến nhất.
    - Dùng tốt khi:
        * Truy cập nhanh cần ưu tiên.
        * Thêm vào cuối thường xuyên.
    - Nhưng nếu cần chèn/xoá giữa thường xuyên → nên dùng cấu trúc khác như Linked List.


II_ĐỐI TƯỢNG NÂNG CAO TRONG JAVASCRIPT
    1. Kiểu Tham Chiếu (Reference Type)
        - Kiểu nguyên thủy (Primitive types): như number, string, boolean, null, undefined, symbol – được lưu trực tiếp dưới dạng giá trị.
        - Kiểu tham chiếu (Reference types): như object, array, function – lưu địa chỉ tham chiếu đến nơi chứa giá trị thực sự trong bộ nhớ.

    2. Kết luận
        Thuộc Tính	                        Primitive	                        Reference
        So sánh	                            So sánh giá trị	                    So sánh địa chỉ vùng nhớ
        Lưu trữ	                            Lưu trực tiếp giá trị	            Lưu địa chỉ tham chiếu
        Ví dụ	                            let a = 5	                        let obj = {x: 1}
