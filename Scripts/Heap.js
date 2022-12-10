function Heap()
{
    //Setting Time complexities
    document.getElementById("worst").innerText="O(N log N)";
    document.getElementById("average").innerText="Θ(N log N)";
    document.getElementById("best").innerText="Ω(N log N)";

    //Setting Space complexity
    document.getElementById("space_worst").innerText="O(1)";

    c_delay=0;

    heap_sort();
    
    enable_buttons();
}

function swap(i,j)
{
    div_update(divs[i],div_size[i],"red");//Color update
    div_update(divs[j],div_size[j],"red");//Color update

    var temp=div_size[i];
    div_size[i]=div_size[j];
    div_size[j]=temp;

    div_update(divs[i],div_size[i],"red");//Height update
    div_update(divs[j],div_size[j],"red");//Height update

    div_update(divs[i],div_size[i],"blue");//Color update
    div_update(divs[j],div_size[j],"blue");//Color update
}

function max_heapify(n,i)
{
    var largest=i;
    var l=2*i+1;
    var r=2*i+2;

    if(l<n && div_size[l]>div_size[largest])
    {
        if(largest!=i)
        {
            div_update(divs[largest],div_size[largest],"blue");//Color update
        }

        largest=l;

        div_update(divs[largest],div_size[largest],"red");//Color update
    }

    if(r<n && div_size[r]>div_size[largest])
    {
        if(largest!=i)
        {
            div_update(divs[largest],div_size[largest],"blue");//Color update
        }

        largest=r;

        div_update(divs[largest],div_size[largest],"red");//Color update
    }

    if(largest!=i)
    {
        swap(i,largest);

        max_heapify(n,largest);
    }
}

function heap_sort()
{
    for(var i=Math.floor(ar_size/2)-1;i>=0;i--)
    {
        max_heapify(ar_size,i);
    }

    for(var i=ar_size-1;i>0;i--)
    {
        swap(0,i);
        div_update(divs[i],div_size[i],"green");//Color update
        div_update(divs[i],div_size[i],"yellow");//Color update

        max_heapify(i,0);

        div_update(divs[i],div_size[i],"blue");//Color update
        div_update(divs[i],div_size[i],"green");//Color update
    }
    div_update(divs[i],div_size[i],"green");//Color update
}