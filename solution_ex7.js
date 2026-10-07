
// 1. Khởi tạo danh sách phòng
const hotelRooms = [
    {
        roomId: 'P101',
        roomType: 'Standard',
        pricePerNight: 1000000,
        status: 'VACANT'
    },
    {
        roomId: 'P102',
        roomType: 'Deluxe',
        pricePerNight: 2000000,
        status: 'OCCUPIED'
    },
    {
        roomId: 'P103',
        roomType: 'Standard',
        pricePerNight: 1200000,
        status: 'VACANT'
    }
];


// 2. In danh sách phòng ban đầu
console.log('===== DANH SÁCH PHÒNG BAN ĐẦU =====');

for (let i = 0; i < hotelRooms.length; i++) {
    console.log(
        hotelRooms[i].roomId,
        hotelRooms[i].roomType,
        hotelRooms[i].pricePerNight.toLocaleString('vi-VN') + ' VNĐ',
        hotelRooms[i].status
    );
}


//CREATE

// 3. Thêm phòng P104
const newRoom = {
    roomId: 'P104',
    roomType: 'VIP Suite',
    pricePerNight: 3500000,
    status: 'VACANT'
};

hotelRooms.push(newRoom);


// 4. In danh sách sau khi thêm
console.log('\n===== SAU KHI THÊM P104 =====');

for (let i = 0; i < hotelRooms.length; i++) {
    console.log(
        hotelRooms[i].roomId,
        hotelRooms[i].roomType,
        hotelRooms[i].pricePerNight.toLocaleString('vi-VN') + ' VNĐ',
        hotelRooms[i].status
    );
}


//UPDATE

// 5. Tìm phòng P101
const updateIndex = hotelRooms.findIndex(
    room => room.roomId === 'P101'
);

// 6. Cập nhật trạng thái P101
if (updateIndex !== -1) {
    hotelRooms[updateIndex].status = 'OCCUPIED';
    console.log('\nĐã cập nhật P101 thành OCCUPIED.');
}


// 7. In danh sách sau khi cập nhật
console.log('\n===== SAU KHI UPDATE P101 =====');

for (let i = 0; i < hotelRooms.length; i++) {
    console.log(
        hotelRooms[i].roomId,
        hotelRooms[i].roomType,
        hotelRooms[i].pricePerNight.toLocaleString('vi-VN') + ' VNĐ',
        hotelRooms[i].status
    );
}


//DELETE

// 8. Tìm phòng P103
const deleteIndex = hotelRooms.findIndex(
    room => room.roomId === 'P103'
);

// 9. Xóa phòng P103
if (deleteIndex !== -1) {
    hotelRooms.splice(deleteIndex, 1);
    console.log('\nĐã xóa phòng P103.');
}


// 10. In danh sách sau khi xóa
console.log('\n===== SAU KHI DELETE P103 =====');

for (let i = 0; i < hotelRooms.length; i++) {
    console.log(
        hotelRooms[i].roomId,
        hotelRooms[i].roomType,
        hotelRooms[i].pricePerNight.toLocaleString('vi-VN') + ' VNĐ',
        hotelRooms[i].status
    );
}

