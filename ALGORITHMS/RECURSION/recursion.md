- Thuật toán đơn giản chỉ là các bước trong một quy trình mà 
chúng ta thực hiện để thực hiện một hành động mong muốn với máy tinh
công thức của một chương trình:
	cấu trúc dữ liệu + thuật toán  = chương trình

- Máy tính cần phải cấp phát bộ nhớ để ghi nhớ mọi thứ, stack overflow cps thể xảy ra khi chúng ta có đệ quy và không 
cách nà để dừng cuộc gọi đệ quy này

- Một hàm đệ quy cần phải có một cái gì đúo dược gọi là trường hợp cơ sở hoặc điểm dừng
- Các hàm đệ uy có hai đường dẫn:
	1. Trường hợp đệ quy (gọi lại hàm và chạy nó)
	2. Trường hợp cơ sở (ngừng gọi hàm)


- QUY TẮC ĐỂ XÂY DỰNG 1 HÀM ĐỆ QUY:
    1. Identify the base case (Xác định trường hợp cơ sở)
        - Đây là điều kiện dừng của đệ quy — cái giúp hàm không bị gọi vô hạn.
        - Trường hợp cơ sở là phần đơn giản nhất của bài toán, và ta có thể giải quyết ngay lập tức mà không cần đệ quy nữa.
    2. Indentify the recursive case (Xác định trường đệ quy)
        - Đây là phần mà hàm gọi lại chính nó, nhưng với một input nhỏ hơn hoặc đơn giản hơn so với ban đầu.
    3. Get closer an closer an return when needed. Usually you have 2 returns (Tiến gần về base case và đảm bảo có trả về giá trị)
        - Nếu không tiến gần về base case thì đệ quy sẽ chạy mãi (stack overflow).
            Thường thì có 2 phần return:
                * Một return cho base case (base case -(điều kiện dừng)).
                * Một return cho recursive case (recursive case - trường hợp đệ quy(là trường hợp chưa dừng)).
=> TỔNG KẾT:
