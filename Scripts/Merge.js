function Merge()
{
    //Setting Time complexities
    document.getElementById("worst").innerText="O(N log N)";
    document.getElementById("average").innerText="Θ(N log N)";
    document.getElementById("best").innerText="Ω(N log N)";

    //Setting Space complexity
    document.getElementById("space_worst").innerText="O(N)";

    c_delay=0;

    merge_partition(0,ar_size-1);

    enable_buttons();
}

function merge_sort(start,mid,end)
{
    var p=start,q=mid+1;

    var Arr=[],k=0;

    for(var i=start; i<=end; i++)
    {
        if(p>mid)
        {
            Arr[k++]=div_size[q++];
            div_update(divs[q-1],div_size[q-1],"red");//Color update
        }
        else if(q>end)
        {
            Arr[k++]=div_size[p++];
            div_update(divs[p-1],div_size[p-1],"red");//Color update
        }
        else if(div_size[p]<div_size[q])
        {
            Arr[k++]=div_size[p++];
            div_update(divs[p-1],div_size[p-1],"red");//Color update
        }
        else
        {
            Arr[k++]=div_size[q++];
            div_update(divs[q-1],div_size[q-1],"red");//Color update
        }
    }

    for(var t=0;t<k;t++)
    {
        div_size[start++]=Arr[t];
        div_update(divs[start-1],div_size[start-1],"green");//Color update
    }
}

function merge_partition(start,end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        div_update(divs[mid],div_size[mid],"yellow");//Color update

        merge_partition(start,mid);
        merge_partition(mid+1,end);

        merge_sort(start,mid,end);
    }
}
