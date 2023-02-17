function deleteData() {
  let result = confirm("คุณต้องการลบข้อมูลหรือไม่ ?");
  if (result) {
    console.log("ลบข้อมูลเรียบร้อย");
  } else {
    console.log("ยกเลิกการลบ");
  }
}
