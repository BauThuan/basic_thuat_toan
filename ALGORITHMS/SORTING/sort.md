1. Mặc định .sort() trong JavaScript không sắp xếp số theo cách mà mày nghĩ
    Giả sử mày có mảng sau:
    const numbers = [65, 34, 2, 8, 7];
    numbers.sort();
    console.log(numbers);
    ✅ Kết quả KHÔNG phải là [2, 7, 8, 34, 65] mà có thể là [2, 34, 65, 7, 8].

1. Vì sao lại vậy?
    Vì:
    JavaScript mặc định chuyển các phần tử thành chuỗi rồi mới so sánh.

    Tức là 65 được chuyển thành "65", "34"... rồi so sánh theo thứ tự bảng chữ cái, giống như so sánh chuỗi.

    "34" < "65" đúng, nhưng "7" > "65" vì "7" có ký tự đầu là '7' (mã Unicode là 55), trong khi '6' là 54.

    → JavaScript sort các chuỗi như "2", "34", "65", "7", "8"... theo Unicode (bảng mã ký tự), không theo số.

3. Vậy làm sao để sắp xếp số đúng?
    Mày phải truyền một hàm so sánh:

    const numbers = [65, 34, 2, 8, 7];
    numbers.sort((a, b) => a - b); // Hàm so sánh đúng cách
    ✔ Kết quả: [2, 7, 8, 34, 65] (vì a - b < 0 → a đứng trước b).

1. Unicode có thể gây rắc rối trong chuỗi từ ngôn ngữ khác (như tiếng Tây Ban Nha)
    Ví dụ:

    const words = ['fútbol', 'costa', 'árbol'];
    words.sort();
    → Kết quả không đúng như người nói tiếng Tây Ban Nha mong muốn vì 'á' không được xem là 'a' theo thứ tự bảng chữ cái bình thường.

    ✅ Cách giải quyết:

    words.sort((a, b) => a.localeCompare(b, 'es'));
    localeCompare sẽ so sánh dựa theo ngôn ngữ cụ thể ('es' là mã ngôn ngữ của tiếng Tây Ban Nha).

    Kết quả sẽ đúng hơn với mong đợi của người bản ngữ.

1. Mỗi trình duyệt có thể dùng thuật toán sắp xếp khác nhau
    JavaScript chỉ định kết quả cuối cùng nên như thế nào, nhưng thuật toán thật sự được sử dụng là tùy vào trình duyệt (engine):

    Chrome dùng V8.

    Firefox dùng SpiderMonkey.

    Safari dùng JavaScriptCore.

    Các engine có thể dùng merge sort, quicksort, Timsort,..., tùy theo mục đích tối ưu hiệu năng.

6. Kết luận
    Hiểu cách .sort() hoạt động là rất quan trọng, đặc biệt khi làm việc với:

    Số (phải truyền comparator- hàm so sánh)

    Chuỗi có dấu

    Đối tượng cần sắp xếp theo thuộc tính cụ thể

    Ví dụ với object:

    const people = [
      { name: 'John', age: 30 },
      { name: 'Alice', age: 25 }
    ];

    people.sort((a, b) => a.age - b.age);
    ✔ Kết quả: sắp theo tuổi tăng dần.

