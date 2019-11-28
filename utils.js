function createResult(err,data)
{
    var result={}
    if(err)
    {
        result['status']="Error"
        result['error']=err
    }
    else
    {
    result['status']="Success"
    result['data']=data
    }
    return result;
}

module.exports={
    createResult : createResult
}