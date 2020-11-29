import React from 'react';

const OrderType = () => {
    return (
        <div className="container form-values">
            <div className="row">
              <p className="items-notice p-3">ITEMS MUST BE SHRINK WRAPPED AND PALLETIZED</p>
              <div className="col-lg-12 ">
                <div className="row pt-1">
                  <div className="col-lg-6 col-md-6">
                    <div className="site-label">Site Details</div>
                    <label className="label-time" for="time-from">Hours</label>
                    <select className="time-select" id="time-from" name="time-from">

                      <option value="1" selected>8:00 am</option>
                      <option value="1">8:30 am</option>
                      <option value="2">9:00 am</option>
                      <option value="1">9:30 am</option>
                      <option value="3">10:00 am</option>
                      <option value="1">10:30 am</option>
                      <option value="1">11:00 am</option>
                      <option value="1">11:30 am</option>
                      <option value="2">12:00 pm</option>
                      <option value="1">12:30 pm</option>
                      <option value="2">1:00 pm</option>
                      <option value="1">1:30 pm</option>
                      <option value="2">2:00 pm</option>
                      <option value="1">2:30 pm</option>
                      <option value="2">3:00 pm</option>
                      <option value="1">3:30 pm</option>
                      <option value="2">4:00 pm</option>
                      <option value="1">4:30 pm</option>
                      <option value="2">5:00 pm</option>
                      <option value="1">5:30 pm</option>
                      <option value="2">6:00 pm</option>
                      <option value="1">Other (Specify Below)</option>
                    </select>

                    <label className="label-time" for="time-to" >To </label>
                    <select className="time-select" id="time-to" name="time-to">
                      <option value="2">9:00 am</option>
                      <option value="1">9:30 am</option>
                      <option value="3">10:00 am</option>
                      <option value="1">10:30 am</option>
                      <option value="1">11:00 am</option>
                      <option value="1">11:30 am</option>
                      <option value="2">12:00 pm</option>
                      <option value="1">12:30 pm</option>
                      <option value="2">1:00 pm</option>
                      <option value="1">1:30 pm</option>
                      <option value="2">2:00 pm</option>
                      <option value="1">2:30 pm</option>
                      <option value="2">3:00 pm</option>
                      <option value="1">3:30 pm</option>
                      <option value="2">4:00 pm</option>
                      <option value="1">4:30 pm</option>
                      <option value="2" selected>5:00 pm</option>
                      <option value="1">5:30 pm</option>
                      <option value="2">6:00 pm</option>
                      <option value="1">Other (Specify Below)</option>
                    </select>
                    <br/>

                    <input className="pickup-details mt-2" name="heightRestrictions"
                      placeholder="Height Restrictions"/>
                    <br/>
                    <label className="site-label" for="heightRestrictions">Pickup Details</label>
                    <input id="noPallets" className="pickup-details" name="noPallets" placeholder="# of Pallets (Required)"/>
                    <br/>
                    <input id="estWeight" className="pickup-details" name="estWeight" placeholder="Estimated Weight (Required)"/>
                  </div>

                  <div className="col-lg-6 col-md-6 site-info">
                    <div className="ad-opt">Additional Options <br/>(Select Multiple)</div>


                    <input className="site-info-check" type="checkbox"  name="palletized"
                      id="palletized" />
                    <label for="palletized">
                      <h2>Items Palletized</h2>
                    </label>

                    <input className="site-info-check" type="checkbox"  name="workersAvailable"
                      id="workersAvailable" />
                    <label for="workersAvailable">
                      <h2>Workers Available To Load </h2>
                    </label>

                    <input className="site-info-check" type="checkbox"  name="liftGate" id="liftGate" />
                    <label for="liftGate">
                      <h2> Lift Gate Needed</h2>
                    </label>

                    <input className="site-info-check" type="checkbox"  name="palletJack" id="palletJack" />
                    <label for="palletJack">
                      <h2>Pallet Jack Available</h2>
                    </label>
                    
                    <input className="site-info-check" type="checkbox"  name="dock" id="dock" />
                    <label for="dock">
                      <h2>Site Has Loading Dock</h2>
                    </label>

                    <input className="site-info-check" type="checkbox"  name="forklift" id="forklift" />
                    <label for="forklift">
                      <h2>Forklift Available</h2>
                    </label>

                  </div>
                  <div className="col-md-12 mt-2">
                    <label className="bold-label">Other Comments</label>
                    <textarea className="textarea" type="textarea" rows="2" name="comments"></textarea>
                    <br/>
                    <div id="file_upload_area"> 
                 
                    
                    <button id="add-another">
                      Add A File
                    </button>
                    <br/>
                    <span>Add Up to 4 Files: </span><br/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
};



export default OrderType;
