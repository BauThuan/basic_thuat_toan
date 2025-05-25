- Là thuật toán sắp xếp tuyến tính, hoạt động theo nguyên tắc:
  => Ở mỗi bước chọn phần tử nhỏ nhất từ đoạn sắp xếp và đưa nó lên đầu đoạn đó
  => Lặp lại cho đến khi mảng được sắp xếp hoàn thành

- Không cần hoán đổi nhiều lần như Bubble Sort
- Vấn rất chậm
1. Ý tưởng chính của Selection Sort:
  Với mỗi vị trí trong mảng, tìm phần tử nhỏ nhất còn lại từ vị trí hiện tại đến hết mảng.
  
  Sau đó hoán đổi phần tử đó với phần tử ở vị trí hiện tại.
  
  📌 Minh họa bằng ví dụ:
  Cho mảng ban đầu:
  [99, 44, 6, 2, 1]
  
  Bước 1:
  Vị trí i = 0 → giả sử min = 0 (tức là 99)
  
  So sánh 99 với 44 → 44 < 99 → min = 1
  
  So sánh 44 với 6 → 6 < 44 → min = 2
  
  So sánh 6 với 2 → 2 < 6 → min = 3
  
  So sánh 2 với 1 → 1 < 2 → min = 4
  → Đã tìm được phần tử nhỏ nhất là 1 tại min = 4
  
  👉 Hoán đổi array[0] và array[4] → [1, 44, 6, 2, 99]
  
  Bước 2:
  i = 1, giả sử min = 1 → phần tử là 44
  
  So sánh 44 với 6 → min = 2
  
  So sánh 6 với 2 → min = 3
  
  2 với 99 → không đổi
  
  👉 Hoán đổi array[1] với array[3] → [1, 2, 6, 44, 99]
  
  Tiếp tục cho đến hết mảng.
  
  🔁 Về mặt kỹ thuật:
  Dùng 2 vòng lặp for lồng nhau:
  
  Vòng ngoài chạy từ 0 → n-1
  
  Vòng trong tìm chỉ số phần tử nhỏ nhất trong phần còn lại của mảng
  
  Sau khi tìm xong, hoán đổi giá trị tại i và minIndex
  
  ⚙️ Độ phức tạp:
  Vẫn là O(n²) (giống bubble sort)
  
  Nhưng thường chạy nhanh hơn bubble sort vì ít hoán đổi hơn
  
  📦 Tổng kết:
  Đặc điểm	Selection Sort
  Ý tưởng chính	Chọn phần tử nhỏ nhất mỗi lượt
  Cách hoạt động	Duyệt, tìm min, rồi swap
  Số lần hoán đổi	Tối đa n lần (rất ít)
  Độ phức tạp	O(n²)
  Ứng dụng thực tế	Đơn giản, dễ hiểu, dạy thuật toán