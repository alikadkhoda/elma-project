import CardItem from "./CardItem";

export default function Cards() {
  return (
    <div className="container px-10 py-40 m-auto">
        <div className="text-center space-y-10 md:px-40 mb-16">
            <h2 className="font-bold text-3xl sm:text-4xl">اعضای تیم تخصصی</h2>
            <p>برنامه ریزیلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            <CardItem img="https://ormazds.ir/templates/006elma/images/team-member-4.jpg" name="توری وایت لانگ" position="توسعه کسب و کار" twitterLink="#twitter" linkedinLink="#linkedin"/>
            <CardItem img="https://ormazds.ir/templates/006elma/images/team-member-4.jpg" name="توری وایت لانگ" position="توسعه کسب و کار" twitterLink="#twitter" linkedinLink="#linkedin"/>
            <CardItem img="https://ormazds.ir/templates/006elma/images/team-member-4.jpg" name="توری وایت لانگ" position="توسعه کسب و کار" twitterLink="#twitter" linkedinLink="#linkedin"/>
            <CardItem img="https://ormazds.ir/templates/006elma/images/team-member-4.jpg" name="توری وایت لانگ" position="توسعه کسب و کار" twitterLink="#twitter" linkedinLink="#linkedin"/>
        </div>
    </div>
  )
}
