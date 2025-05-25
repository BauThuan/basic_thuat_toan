- Insertion Sort (Sắp xếp chèn) hoạt động giống như cách mày sắp xếp bài trên tay khi chơi bài
- Mỗi lần rút một lá bài từ bộ bài, mày chèn nó vào đúng vị trí trong các lá đã có sẵn trên tay, sao cho chúng vẫn theo thứ tự tăng dần.
- Cách hoạt động từng bước
    Giả sử mày có một mảng:
        [5, 3, 8, 6, 2]
        ✅ Bước 1: Giả định rằng phần tử đầu tiên đã được sắp xếp:
        [5] | [3, 8, 6, 2]

        ✅ Bước 2: Lấy phần tử tiếp theo (3) và chèn vào đúng chỗ trong phần đã sắp xếp:
        3 < 5 → Chèn 3 trước 5

        [3, 5] | [8, 6, 2]
        ✅ Bước 3: Lấy 8 → so với 5, 8 > 5 → giữ nguyên:
        [3, 5, 8] | [6, 2]

        ✅ Bước 4: Lấy 6 → chèn đúng vào giữa 5 và 8:
        6 < 8 → đẩy 8 qua phải
        6 > 5 → chèn vào sau 5
        [3, 5, 6, 8] | [2]

        ✅ Bước 5: Lấy 2 → so sánh ngược về đầu mảng:
        2 < 8 → đẩy 8 qua
        2 < 6 → đẩy 6 qua
        2 < 5 → đẩy 5 qua
        2 < 3 → đẩy 3 qua
        Chèn 2 vào đầu

        [2, 3, 5, 6, 8]