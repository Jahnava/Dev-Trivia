var $prehashval = "";
function loop()
{
    if (location.hash.slice(1)!=$prehashval)
        hashChanged();

    $prehashval = location.hash.slice(1);
    setTimeout("loop()", 100);
}
function hashChanged()
{
    var $output;
    switch (location.hash.slice(1))
    {
        case "page1":
            document.getElementById('page1').style.display = "";
            document.getElementById('page2').style.display = "none";
            break;
        case "page2":
            document.getElementById('page1').style.display = "none";
            document.getElementById('page2').style.display = "";
            break;
        default:
            $output = location.hash.slice(1);
    }
}
loop();
