function Selection_sort()
{
    //Setting Time complexities
    document.getElementById("worst").innerText="O(N^2)";
    document.getElementById("average").innerText="Θ(N^2)";
    document.getElementById("best").innerText="Ω(N^2)";

    //Setting Space complexity
    document.getElementById("space_worst").innerText="O(1)";

    c_delay=0;

    for(var i=0;i<ar_size-1;i++)
    {
        div_update(divs[i],div_size[i],"red");//Color update

        index_min=i;

        for(var j=i+1;j<ar_size;j++)
        {
            div_update(divs[j],div_size[j],"yellow");//Color update

            if(div_size[j]<div_size[index_min])
            {
                if(index_min!=i)
                {
                    div_update(divs[index_min],div_size[index_min],"blue");//Color update
                }
                index_min=j;
                div_update(divs[index_min],div_size[index_min],"red");//Color update
            }
            else
            {
                div_update(divs[j],div_size[j],"blue");//Color update
            }
        }
        
        if(index_min!=i)
        {
            var temp=div_size[index_min];
            div_size[index_min]=div_size[i];
            div_size[i]=temp;

            div_update(divs[index_min],div_size[index_min],"red");//Height update
            div_update(divs[i],div_size[i],"red");//Height update
            div_update(divs[index_min],div_size[index_min],"blue");//Color update
        }
        div_update(divs[i],div_size[i],"green");//Color update
    }
    div_update(divs[i],div_size[i],"green");//Color update

    enable_buttons();
}