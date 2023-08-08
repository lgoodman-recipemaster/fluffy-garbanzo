function skillsMember()
{
    var member = new Object();
    member.name = "";
    member.age = "";
    member.skills = [];
    member.calculateTotal = function()
    {
        var total = 0;
        for (var i = 0; i < this.skills.length; i++)
        {
            total += this.skills[i].points;
        }
        return total;
    }
    return member;
}