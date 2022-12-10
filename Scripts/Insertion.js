function Insertion()
{
    //Setting Time complexities
    document.getElementById("worst").innerText="O(N^2)";
    document.getElementById("average").innerText="Θ(N^2)";
    document.getElementById("best").innerText="Ω(N)";

    //Setting Space complexity
    document.getElementById("space_worst").innerText="O(1)";

    c_delay=0;

    for(var j=0;j<ar_size;j++)
    {
        div_update(divs[j],div_size[j],"yellow");//Color update

        var key= div_size[j];
        var i=j-1;
        while(i>=0 && div_size[i]>key)
        {
            div_update(divs[i],div_size[i],"red");//Color update
            div_update(divs[i+1],div_size[i+1],"red");//Color update

            div_size[i+1]=div_size[i];

            div_update(divs[i],div_size[i],"red");//Height update
            div_update(divs[i+1],div_size[i+1],"red");//Height update
    
            div_update(divs[i],div_size[i],"blue");//Color update
            if(i==(j-1))
            {
                div_update(divs[i+1],div_size[i+1],"yellow");//Color update
            }
            else
            {
                div_update(divs[i+1],div_size[i+1],"blue");//Color update
            }
            i-=1;
        }
        div_size[i+1]=key;

        for(var t=0;t<j;t++)
        {
            div_update(divs[t],div_size[t],"green");//Color update
        }
    }
    div_update(divs[j-1],div_size[j-1],"green");//Color update

    enable_buttons();
}