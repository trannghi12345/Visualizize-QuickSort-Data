function getValue(){
let x = document.getElementById("inputdata").value
console.log(x);
array1 = new Array() 
array1 = x.split(',');  
data= new Array()
for(let u of array1){
  // console.log(u)
  data.push(parseInt(u));
}
renderChart(data);
}

// for(let u of data){
//   console.log(typeof(u))
 
// }
// Create an array of random numbers to sort


// Define the chart element and bar width
const chart = document.getElementById('chart');
const barWidth = 50;


// Render the initial chart
 

// explain.style.width = boxWidth;

// Define the quick sort algorithm



var ispause = false;
var pause = document.getElementById("pause");


pause.addEventListener('click', ()=> {
    pause.style.backgroundColor = 'red';
    if(ispause == false)
    {
        ispause = true;
    }
    else {ispause=false;}
})

async function quickSort(arr, left, right) {
   hightcode(2);
    if (left < right) {
        // console.log(ispause);
        hightcode(3);
        let pivotIndex = await partition(arr, left, right);
        hightcode(4);
        await quickSort(arr, left, pivotIndex - 1);
        hightcode(5);
        await quickSort(arr, pivotIndex + 1, right);
    
        
    }
}




// Define the partition function
async function partition(arr, left, right) {
    hightcode(7);
    // Chọn phần tử cuổi cùng làm chốt
    let pivotValue = arr[right];
    changecolor(arr,right,"red");
    hightcode(8);
    // Gán chỉ số chốt là chỉ số phần tử đầu tiên là 0
    let pivotIndex = left;
   hightcode(9);
//    Tăng giá trị của pivotindex cho tới khi nào tìm đuocưk phần tử lớn hơn hoặc bằng chốt

    for (let i = left; i < right; i++) {
        hightcode(10);
        if (arr[i] < pivotValue) {
            hightcode(11);
            // trong trường hợp chạy tiếp tìm được phần tử nhỏ hơn chôts đứng sau phần tử lớn hơn chốt thì đổi chổ
            await swap(arr, i, pivotIndex); 
            hightcode(12);
            pivotIndex++;
        }
    }
    // kết thúc vòng lặp sẽ có đc chỉ sổ chốt 
    // đổi chỗ phần tử ở vị tris cuối và vị trí pivotindex
    // phần tử mới tại vị trí pivotindex mới sẽ là điểm phân hoạch
    hightcode(12);
    await swap(arr, right, pivotIndex);
    hightcode(13);
    hightcode(14);
    return pivotIndex;
   
}


// Define the swap function
async function swap(arr, i, j) {
    changecolor(arr,i,"blue");
    changecolor(arr,j,"blue");
    await sleep(1000); // Add a delay to slow down the visualization
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    renderChart(arr);
}

// Define the render chart function
function renderChart(data) {
    chart.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        let bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = data[i]*2 + 'px';
        bar.style.width = barWidth + 'px';
        bar.textContent = data[i];
        chart.appendChild(bar);
    }
}
    


// Define the start sorting function
function startSorting() {
    quickSort(data, 0, data.length - 1)
}

// Define the sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function changecolor(arr, i, color){
    let x = document.getElementsByClassName("bar");
    for(let elem in x) {  
        x[i].style.background = color;
    }
}

function hightcode(i){
let temp = document.getElementsByClassName("code");
    for(let elem in temp){
        temp[i-1].style.background = "white";
        setTimeout(function(){
            temp[i-1].style.background = "";
        }, 6000);
    }

}

function removehightlight(i){
    let temp = document.getElementsByClassName("code");
    for(let elem in temp){
    
    }
}
// function executetime(name)
// console.log(temp[0].textContent);


const fileUpload = document.querySelector("#file-upload");
// Khởi tạo đối tượng FileReader
const reader = new FileReader();

// Lắng nghe trạng thái đăng tải tệp
fileUpload.addEventListener("change", (event) => {
	// Lấy thông tin tập tin được đăng tải
	const files  = event.target.files;
	
	// Đọc thông tin tập tin đã được đăng tải
	reader.readAsDataURL(files[0])
	
	// Lắng nghe quá trình đọc tập tin hoàn thành
	reader.addEventListener("load", (event) => {
		// Lấy chuỗi Binary thông tin hình ảnh
		const img = event.target.result;
		const image = document.getElementById('images');
        image.append(img);
		// Thực hiện hành động gì đó, có thể append chuỗi giá trị này vào thẻ IMG
		console.log(img) // data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAA........
	})
})
