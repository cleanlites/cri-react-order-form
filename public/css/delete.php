<div class="body_copy">
  <table>
    <tr>
      <td class="two_column">
        <div class="logo">
          <img src="https://cleanlites.com/wp-content/uploads/2019/11/logo.png" />
        </div>
        <!-- logo -->
      </td>
      <td class="two_column" style="padding-left: 50px">
        <center style="font-size: 15px; font-weight: 800">
          <h2 class="head">{CleanlitesFacility:199}</h2>
          <strong>
            Order For
            <?php echo $fields['197.orderType'] === 'orderType--pickup' ? "Pickup" :  "Delivery"; ?></strong>

          usasales@cleanlites.com <br />
          1-888-826-9128
        </center>
      </td>
    </tr>
  </table>
  <br />
  <div class="h2_wrapper">
    <h2>Facility Contact</h2>
  </div>
  <br />
  <table>
    <tr>
      <td class="two_column">
        <p>
          <strong>Billing Company</strong>
           - {billingCompany:88}
        </p>
        <p>
          <strong>Street</strong>
           - {billingAddress:183}
        </p>
        <p>
          <strong>City</strong>
           - {billingCity:184}
        </p>
        <p>
          <strong>State</strong>
           - {billingState:185}
        </p>
        <p>
          <strong>Zip</strong>
           - {billingZip:186}
        </p>
        <p>
          <strong>Contact Name</strong> 
          - {billingContactName:139}
        </p>
        <p>
          <strong>Phone Number</strong>
           - {billingPhone:5}
        </p>
        <p>
          <strong> Date </strong> 
          {submitDate:190}
      </p>
        <p>
          <strong>Order Type</strong>
           {orderType:197}
        </p>
      </td>
      <td class="two_column" style="padding-left: 50px">
        <p>
          <strong>Generator</strong>
           - {generatorCompany:87}
         </p>
        <p>
          <strong>Street</strong>
           - {generatorAddress:177}
         </p>
        <p>
          <strong>City</strong> 
          - {generatorCity:178}
       </p>
        <p>
          <strong>State</strong>
           - {generatorState:179}
         </p>
        <p>
          <strong>Zip</strong> 
          - {generatorZip:181}
       </p>
        <p>
          <strong>Contact</strong>
           - {generatorContactName:140}
         </p>
        <p>
          <strong>Phone Number</strong> 
          - {generatorPhone:89}
       </p>
        <p>
          <strong>Email</strong> 
          - {billingEmail:182}
       </p>
        <p>
          <strong>PO#</strong> 
          - {poNumber:7}
       </p>
      </td>
    </tr>
  </table>
  <br />
  <div class="h2_wrapper">
    <h2>Materials for Recycling</h2>
  </div>
  <br />
  <table>
    <tr>
      <td class="three_column" height="100">
        <div class="h3_wrapper">Lamps</div>
        <br />
        <p><strong>4ft. Fluorescents</strong> - {4ftUnder:19}</p>
        <p><strong>8ft. Fluorescents</strong> - {8ftOver:25}</p>
        <p><strong>Compact Lamps</strong> - {CFL:26}</p>
        <p><strong>Incandescent</strong> - {Incandescent:27}</p>
        <p><strong>U-Bent Lamps</strong> - {uBend:28}</p>
        <p><strong>HID Lamps</strong> - {HIDs:142}</p>
        <p><strong>Other Lamps</strong> - {lampsOther:29}</p>
        <br />
        <div class="h3_wrapper">Computer / Electronics</div>
        <br />
        <p><strong>Monitors</strong> - {monitors:30}</p>
        <p><strong>Keyboards</strong> - {keyboards:31}</p>
        <p><strong>Hard Drives</strong> - {hardDrives:32}</p>
        <p><strong>Printers</strong> - {printers:33}</p>
        <p><strong>Electronics Other 1</strong> - {electronicsOther1:34}</p>
        <p><strong>Electroncis Other 2</strong> - {electronicsOther2:164}</p>
      </td>

      <td class="three_column" height="100">
        <div class="h3_wrapper">Ballasts / Capacitors</div>
        <br />
        <p><strong>Ballasts</strong> - {ballast_ballasts:37}</p>
        <p><strong>Capacitors</strong> - {ballasts_capacitors:38}</p>
        <p><strong>Other 1</strong> - {ballast_other1:165}</p>
        <p><strong>Other 2</strong> - {ballast_other2:166}</p>
        <br />
        <div class="h3_wrapper">Other</div>
        <br />
        <p><strong>Mercury Devices</strong> - {HG_devices:39}</p>
        <p><strong>Mercury Fixtures</strong> - {HG_fixtures:169}</p>
        <p><strong>Other 1</strong> - {HG_other1:176}</p>
        <p><strong>Other 2</strong> - {HG_other2:175}</p>
        <p><strong>Other 3</strong> - {HG_other2:174}</p>
        <p><strong>Other 4</strong> - {HG_other2:173}</p>
        <p><strong>PCB Containing</strong> - {HG_pcbContaining:172}</p>
        <p><strong>Toners</strong> - {HG_toners:173}</p>
        <p><strong>Transformers</strong> - {HG_transformers:173}</p>
      </td>

      <td class="three_column" height="100">
        <div class="h3_wrapper">Batteries</div>
        <br />
        <p><strong>Nickel Cadmium</strong> - {batteries_niCad:42}</p>
        <p><strong>Nickel Metal Hydride</strong> - {batteries_niMh:43}</p>
        <p><strong>Alkaline</strong> - {batteries_alkaline:44}</p>
        <p><strong>Zinc Carbon</strong> - {batteries_zincCarbon:45}</p>
        <p><strong>Zinc</strong> - {batteries_zincAir:46}</p>
        <p><strong>Lead Acid Dry Cell</strong> - {batteries_leadAcidDry:47}</p>
        <p><strong>Lead Acid Wet Cell</strong> - {batteries_leadAcidWet:48}</p>
        <p><strong>Mercury</strong> - {batteries_mercury:49}</p>
        <p><strong>Silver Oxide</strong> - {bateries_buttonCell:50}</p>
        <p><strong>Lithium</strong> - {batteries_lithium:51}</p>
        <p><strong>Lithium Ion</strong> - {batteries_lithiumIon:52}</p>
        <p><strong>Magnesium</strong> - {batteries_magnesium:53}</p>
        <p><strong>Co-Mingled</strong> - {batteries_coMingled:54}</p>
        <p><strong>Other 1</strong> - {batteries_other1:57}</p>
        <p><strong>Other 2</strong> - {batteries_other2:58}</p>
      </td>
    </tr>
  </table>
  <br />
  <div class="h2_wrapper">
    <h2>Containers Needed</h2>
  </div>
  <br />
  <table>
    <tr>
      <td class="three_column">
        <p><strong>4ft. Boxes</strong> - {containers_4ftBox:23}</p>
        <p><strong>8ft. Boxes</strong> - {containers_8ftBox:209}</p>
        <p><strong>U-Bend Boxes</strong> - {containers_uBendBox:105}</p>
      </td>
      <td class="three_column">
        <!-- <p><strong>4ft. Fibre Drums</strong> - {4ft. Fibre Drums:113}</p> -->
        <p><strong>Gaylords</strong> - {containers_gaylords:61}</p>
        <p><strong>Battery Boxes</strong> - {containers_smallBatteryBox:64}</p>
        <p><strong>55 Gallon Drum</strong> - {containers_55GallonDrums:62}</p>
      </td>
      <td class="three_column">
        <p><strong>Poly Drums</strong> - {containers_polyDrums:210}</p>
        <p><strong>5gal. Pails</strong> - {containers_5GallonPail:63}</p>
        <p><strong>Containers Other 1</strong> - {containers_other1:211}</p>
        <p><strong>Containers Other 2</strong> - {containers_other2:66}</p>
      </td>
    </tr>
  </table>
  <br />
  <div class="h2_wrapper">
    <h2>Site Information</h2>
  </div>
  <br />

  <table>
    <tr>
      <td class="three_column">
        <p>
          <strong>Receiving Hours: <br /> </strong>{Receiving Hours:158}
        </p>
      </td>

      <td class="three_column">
        <p>
          <strong>Loading Dock</strong> -
          <?php yn($fields['195.dock']); ?>
        </p>

        <p>
          <strong>Require Lift Gate</strong> -
          <?php yn($fields['193.liftGate']); ?>
        </p>

        <p>
          <strong>Pallet Jack</strong> -
          <?php yn($fields['194.palletJack']); ?>
        </p>

        <p>
          <strong>Palletized</strong> -
          <?php yn($fields['207.palletized']); ?>
        </p>
      </td>

      <td class="three_column">
        <p>
          <strong>Workers Available</strong> -
          <?php yn($fields['192.workersAvailable']); ?>
        </p>

        <p>
          <strong>Forklifts Available</strong> -
          <?php yn($fields['191.forklift']); ?>
        </p>
        <br /><br />
        <p><strong>Number of Pallets</strong> - {noPallets:77}</p>
        <p><strong>Estimated Total Weight</strong> - {estTotalWeight:141}</p>
      </td>
    </tr>
  </table>
  <br />
  <div class="h2_wrapper">
    <h2>Directions / Special Instructions</h2>
  </div>
  <br />
  <table>
    <tr>
      <td>
        <p><strong>Directions / Instructions</strong> - {comments:79}</p>
        <p><strong>Height Restrictions</strong> - {heightRestrictions:69}</p>
        <p><strong>Date Sent</strong> - {date_mdy}</p>
      </td>
    </tr>
  </table>
</div>
<!-- body_copy -->