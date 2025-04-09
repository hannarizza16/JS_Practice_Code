const calculateRctangleArea = (length, width) => {
    return length * width
}

// function showArea () {

// }

const showArea = () => {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value)

    const area = calculateRctangleArea(length, width)

    document.getElementById("result").innerHTML = `Area: ${area}`
}