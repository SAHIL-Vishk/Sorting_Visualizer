function Bubble()
{
    //Setting Time complexities
    document.getElementById("worst").innerText="O(N^2)";
    document.getElementById("average").innerText="Θ(N^2)";
    document.getElementById("best").innerText="Ω(N)";

    //Setting Space complexity
    document.getElementById("space_worst").innerText="O(1)";

    c_delay=0;

    for(var i=0;i<ar_size-1;i++)
    {
        for(var j=0;j<ar_size-i-1;j++)
        {
            div_update(divs[j],div_size[j],"yellow");//Color update

            if(div_size[j]>div_size[j+1])
            {
                div_update(divs[j],div_size[j], "red");//Color update
                div_update(divs[j+1],div_size[j+1], "red");//Color update

                var temp=div_size[j];
                div_size[j]=div_size[j+1];
                div_size[j+1]=temp;

                div_update(divs[j],div_size[j], "red");//Height update
                div_update(divs[j+1],div_size[j+1], "red");//Height update
            }
            div_update(divs[j],div_size[j], "blue");//Color updat
        }
        div_update(divs[j],div_size[j], "green");//Color update
    }
    div_update(divs[0],div_size[0], "green");//Color update

    enable_buttons();
}