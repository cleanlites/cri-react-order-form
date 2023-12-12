import React, { useContext } from "react";
import LocationPicker from "./LocationPicker";
import { AppContext } from "../../AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
	faUpload,
	faDownload,
	faTruckMoving,
	faTruckLoading,
} from "@fortawesome/free-solid-svg-icons";

const OrderType = () => {
	const {
		setInputValue,
		getInputValue,
		nextPane,
		setValid,
		appState: { inputs, generatorSame, sections },
	} = useContext(AppContext);

	const checkValid = () => {
		let keys = [inputs.orderType, inputs.CleanlitesFacility];

		keys = keys.filter((key) => key.value !== "");

		if (keys.length === 2) {
			setValid("Order", true, () => {
				setTimeout(() => {
					nextPane();
				}, 700);
			});
		}
		// const billingInputs = inputs.filter(input => inputs.name.slice(0, 7))
	};

	const handleChange = (value) => {
		setInputValue(value.target);
		checkValid();
	};
	return (
		<div className="form-values">
			<div className="container">
				<div className="row">
					<div className="col-md-12 order-type--box">
						<input
							checked={getInputValue("orderType") === "orderType--pickup"}
							readOnly
							className="auto-next"
							type="radio"
							name="orderType"
							value="orderType--pickup"
							onClick={handleChange}
							id="pickup"
						/>

						<label className="order-type--label" htmlFor="pickup" id="pickup">
							<center>
								<FontAwesomeIcon icon={faTruckMoving} />
								<div className="text">Pickup / Container Delivery</div>
							</center>
						</label>
						<input
							checked={getInputValue("orderType") === "orderType--delivery"}
							readOnly
							className="auto-next"
							type="radio"
							name="orderType"
							value="orderType--delivery"
							onClick={handleChange}
							id="delivery"
						/>
						<label
							className="order-type--label"
							htmlFor="delivery"
							id="delivery"
						>
							<center>
								<FontAwesomeIcon icon={faTruckLoading} />
								<div className="text">Customer Drop Off</div>
							</center>
						</label>
					</div>

					<div
						className="locations-wrap"
						style={{ margin: "auto", textAlign: "center" }}
					>
						<h2>Pick Your Cleanlites Location</h2>
						<LocationPicker checkValid={checkValid} />
					</div>
				</div>
				<hr />
				<div className="row">
					<div className="col-md-6 mt-5 m-auto p-3 ">
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								textAlign: "center",
							}}
						>
							<p className="header--span">
								{" "}
								<FontAwesomeIcon
									icon={faUpload}
									style={{ marginRight: "1rem" }}
								/>
								Upload PDF Instead
							</p>
							<button
								id="upload-pdf"
								className="order-type--button"
								onClick={() => {
									window.location.href =
										"https://cleanlites.com/upload-pdf-form";
								}}
							>
								Click Here
							</button>
						</div>
						<div style={{ textAlign: "center", marginTop: "1rem" }}>
							<a
								download={true}
								target="_blank"
								href="https://storage.googleapis.com/public-forms/2023-OrderForm.pdf"
							>
								<FontAwesomeIcon
									icon={faDownload}
									style={{ marginRight: "1rem" }}
								/>
								Download the latest PDF
							</a>
						</div>
					</div>
					<div className="col-md-6 m-auto p-3">
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								textAlign: "center",
							}}
						>
							<p className="header--span">Just Containers</p>
							<button
								id="container-order"
								className="order-type--button"
								onClick={() => {
									window.location.href =
										"https://cleanlites.com/order-containers";
								}}
							>
								Containers Only
							</button>
						</div>
						<div
							style={{ textAlign: "center", height: "2.25rem", content: "" }}
						></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderType;
