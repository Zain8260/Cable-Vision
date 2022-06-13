import React from "react";
import { Tab, Tabs as TabsComponent, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ReactComponent as IconChevronRight } from "bootstrap-icons/icons/chevron-right.svg";
 const add = (value) => {
   
   localStorage.setItem("Amount",value)
 }
const Tabs = ({ data }) => (
  <TabsComponent>
    <TabList>
      {data.map(({ heading }, i) => (
        <Tab key={i}>{heading}</Tab>
      ))}
    </TabList>
    {data.map(({ body,body2 }, i) => (
      <TabPanel key={i}>
          
          <div style={{padding:10}}>
         <h4>{body}</h4> 
          </div>
          <div className="row mb-3">
        
          <div className="col-md-4">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">
                HOME UNLIMITED
                </strong>
                {/* <h4 className="mb-0">Lahore</h4> */}
                <div className="mb-1 text-muted small"></div>
                <div className="row">
                <div style={{ width: 120, height:120 }}  className="col-md-2">
                <CircularProgressbar value={0.66} maxValue={1} text={`5 \n Mbps`}  />
                </div>
               <div style={{marginLeft:10}} className="col-md-6">
                   <p>Bandwidth : 5Mbps</p>
                   <p>Downloads : Unlimited</p>
                   <p>Price : 1,330/month</p>
                   
              
               </div>
           
</div>
             
                <Link to="/checkout" className="stretched-link btn btn-sm btn-primary" style={{marginTop:10}} onClick={()=>add('1330')}>
                Apply Now
                  <IconChevronRight />
                </Link>
              </div>
              
            </div>
          </div>
          <div className="col-md-4">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">
                HOME 100 7/7
                </strong>
                {/* <h4 className="mb-0">Lahore</h4> */}
                <div className="mb-1 text-muted small"></div>
                <div className="row">
                <div style={{ width: 120, height:120 }}  className="col-md-2">
                <CircularProgressbar value={0.66} maxValue={1} text={`7 \n Mbps`}  />
                </div>
               <div style={{marginLeft:10}} className="col-md-6">
                   <p>Bandwidth : 7Mbps</p>
                   <p>Downloads :100GB</p>
                   <p>Price : 1,330/month</p>
                   
              
               </div>
           
</div>
             
                <Link to="/checkout" className="stretched-link btn btn-sm btn-primary" style={{marginTop:10}} onClick={()=>add('1330')}>
                Apply Now
                  <IconChevronRight />
                </Link>
              </div>
              
            </div>
          </div>
          {/* <div className="col-md-4">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">
                  City
                </strong>
                <h4 className="mb-0">Lahore</h4>
                <div className="mb-1 text-muted small"></div>
              
                <Link to="/" className="stretched-link btn btn-sm btn-primary" style={{marginTop:10}}>
                 Get Bundles
                  <IconChevronRight />
                </Link>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img src="./../images/blog/nature-thumbnail-2.webp" alt="..." />
              </div>
            </div>
          </div> */}
        </div>
        <div style={{padding:10}}>
         <h4>{body2}</h4> 
          </div>
        <div className="row mb-3">
        
          <div className="col-md-4">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">
                HOME UNLIMITED
                </strong>
                {/* <h4 className="mb-0">Lahore</h4> */}
                <div className="mb-1 text-muted small"></div>
                <div className="row">
                <div style={{ width: 120, height:120 }}  className="col-md-2">
                <CircularProgressbar value={0.66} maxValue={1} text={`5 \n Mbps`}  />
                </div>
               <div style={{marginLeft:10}} className="col-md-6">
                   <p>Bandwidth : 5Mbps</p>
                   <p>Downloads : Unlimited</p>
                   <p>Price : 1,330/month</p>
                   
              
               </div>
           
</div>
             
                <Link to="/checkout" className="stretched-link btn btn-sm btn-primary" style={{marginTop:10}} onClick={()=>add('1330')}>
                Apply Now
                  <IconChevronRight />
                </Link>
              </div>
              
            </div>
          </div>
          <div className="col-md-4">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">
                HOME 100 7/7
                </strong>
                {/* <h4 className="mb-0">Lahore</h4> */}
                <div className="mb-1 text-muted small"></div>
                <div className="row">
                <div style={{ width: 120, height:120 }}  className="col-md-2">
                <CircularProgressbar value={0.66} maxValue={1} text={`7 \n Mbps`}  />
                </div>
               <div style={{marginLeft:10}} className="col-md-6">
                   <p>Bandwidth : 7Mbps</p>
                   <p>Downloads :100GB</p>
                   <p>Price : 1,330/month</p>
                   
              
               </div>
           
</div>
             
                <Link to="/checkout" className="stretched-link btn btn-sm btn-primary" style={{marginTop:10}} onClick={()=>add('1330')}>
                Apply Now
                  <IconChevronRight />
                </Link>
              </div>
              
            </div>
          </div>
          {/* <div className="col-md-4">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">
                  City
                </strong>
                <h4 className="mb-0">Lahore</h4>
                <div className="mb-1 text-muted small"></div>
              
                <Link to="/" className="stretched-link btn btn-sm btn-primary" style={{marginTop:10}}>
                 Get Bundles
                  <IconChevronRight />
                </Link>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img src="./../images/blog/nature-thumbnail-2.webp" alt="..." />
              </div>
            </div>
          </div> */}
        </div>
          </TabPanel>
    ))}
  </TabsComponent>
);

export default Tabs;
