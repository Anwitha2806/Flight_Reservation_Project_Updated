"use strict";(self.webpackChunkflight_booking_system=self.webpackChunkflight_booking_system||[]).push([[421],{3421:(e,r,i)=>{i.r(r),i.d(r,{default:()=>p});var s=i(5043),l=i(8073),t=i(6187),n=i(3359),o=i(495),a=i(7503),c=i(4759),d=i(8885),h=i(2703),x=i(9691),g=i(105),A=i(8011),u=i(9610),k=i(579);const p=e=>{const[r,i]=(0,s.useState)([]),{userInfoSession:p}=(0,u.q)();(0,s.useEffect)((()=>{A.A.getAllReservation(p.userId).then((e=>{i(e.data)}))}),[]);return(0,k.jsx)(l.A,{container:!0,spacing:2,children:r&&(0,k.jsxs)(l.A,{item:!0,xs:12,children:[(0,k.jsx)("div",{style:{textAlign:"center",marginBottom:"20px"},children:(0,k.jsx)(t.A,{variant:"h5",children:"Booking Details"})}),(0,k.jsx)(n.A,{style:{borderRadius:10},component:o.A,children:(0,k.jsxs)(a.A,{children:[(0,k.jsx)(c.A,{children:(0,k.jsxs)(d.A,{children:[(0,k.jsx)(h.A,{style:{width:"50px",backgroundColor:"black",color:"white"},children:"Booking ID"}),(0,k.jsx)(h.A,{style:{width:"50px",backgroundColor:"black",color:"white"},children:"Departure"}),(0,k.jsx)(h.A,{style:{width:"80px",backgroundColor:"black",color:"white"},children:"Arrival"}),(0,k.jsx)(h.A,{style:{width:"100px",backgroundColor:"black",color:"white"},children:"Departure Date and Time"}),(0,k.jsx)(h.A,{style:{width:"100px",backgroundColor:"black",color:"white"},children:"Arrival Date and Time"}),(0,k.jsx)(h.A,{style:{width:"50px",backgroundColor:"black",color:"white"},children:"Actions"})]})}),(0,k.jsx)(x.A,{children:r.map((r=>(0,k.jsxs)(d.A,{children:[(0,k.jsx)(h.A,{children:r.bookingId}),(0,k.jsx)(h.A,{children:r.departure}),(0,k.jsx)(h.A,{children:r.arrival}),(0,k.jsxs)(h.A,{children:[r.passenger.flightDetails[0].departureDate," ",r.passenger.flightDetails[0].departureTime]}),(0,k.jsxs)(h.A,{children:[r.passenger.flightDetails[0].arrivalDate," ",r.passenger.flightDetails[0].arrivalTime]}),(0,k.jsx)(h.A,{children:(0,k.jsx)(g.A,{variant:"contained",style:{backgroundColor:"black",color:"white"},className:"action-button",onClick:()=>{return i=r.bookingId,s=r.passenger.userId,void e.history.push(`/view-reservation/${i}/${s}`);var i,s},children:"View"})})]},r.bookingId)))})]})})]})})}}}]);
//# sourceMappingURL=421.5c5095f5.chunk.js.map