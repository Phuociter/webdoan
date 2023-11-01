function chonnamsinh() {
    var yearDropDown = document.getElementById('namsinh');
    var currentYear = new Date().getFullYear();
    for(var year = currentYear;year >= 1900; year-- ) {
        for(var month = 1; month <= 12; month++) {
            var maxDays = (month === 2 && (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0))) ? 29 : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1];
            for(var day  = 1; day <= maxDays; day++) {
                var option = document.createElement("option");
                date = day + "/" + month + "/" + year;
                option.text = date;
                option.value = date;
                yearDropDown.add(option);

            }
        }
        var option = document.createElement("option");
        option.value = year;
        option.text = year;
        yearDropDown.add(option);
    }
}
