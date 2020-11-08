import React, { useEffect, useState } from "react";

import { ItemCard } from "../../Partials/ItemCard/ItemCard";
import { ItemCardContent } from "../../Partials/ItemCard/ItemCardContent";
import { TilesTable } from "../../Partials/TilesTable/TilesTable";
import { InfoMessage } from "../../Partials/InfoMessage";
import { Button } from "../../Partials/Button";

// Modal
import { Modal } from "../../Partials/Modal/Modal";
import { Input } from "../../Partials/Input";
import info from "../../../images/info.svg";
import arrowAccordeon from "../../../images/arrowAccordeon.svg";

import {
  CONTENT_CALCULATE_CARD,
  TILES_PAYLOAD,
  PLANTS_MODAL_SELECT_PAYLOAD,
} from "../../../const";

import "./PlantsElectrical.css";
import "./ModalForm.css";

export const PlantsElectrical = ({ title }) => {
  const [showInfo, setShowInfo] = useState(true);
  const [modalType, setModalType] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedTilesItems, setSelectedTilesItems] = useState({
    plants: [],
    modules: [],
    inverters: [],
  });

  const [moduleType, setModuleType] = useState("");
  const [disableMonoface, setDisableMonofaces] = useState(false);

  // eslint-disable-next-line
  const handleModalOn = (value) => (setShowModal(true), setModalType(value))

  // eslint-disable-next-line
  const handleModalClose = () => (setShowModal(false), setModalType(""))

  const handleSelectedTiles = (type, value) => {
    setSelectedTilesItems({
      ...selectedTilesItems,
      [type]: value,
    });
  };

  // TODO: Create generator that creates entries accordingly to Columns
  useEffect(() => {
    selectedTilesItems.plants.length &&
    selectedTilesItems.modules.length &&
    selectedTilesItems.inverters.length
      ? setShowInfo(false)
      : setShowInfo(true);
  }, [selectedTilesItems]);

  useEffect(() => {
    showModal
      ? document.querySelector("body").classList.add("scroll-disabled")
      : document.querySelector("body").classList.remove("scroll-disabled");
  }, [showModal]);

  useEffect(() => {
    moduleType === "monofacial" && !disableMonoface
      ? setDisableMonofaces(true)
      : setDisableMonofaces(false);
    // eslint-disable-next-line
  }, [moduleType]);

  return (
    <div className="PlantsElectrical widget max-width-wrapper">
      <h1>{title}</h1>

      <ItemCard
        title={CONTENT_CALCULATE_CARD.title}
        subtitle={CONTENT_CALCULATE_CARD.subtitle}
        type="side"
      >
        <ItemCardContent items={CONTENT_CALCULATE_CARD.items} />
      </ItemCard>

      <TilesTable
        data={TILES_PAYLOAD}
        selectedTilesItems={selectedTilesItems}
        handleSelectedTiles={handleSelectedTiles}
        handleModalOn={handleModalOn}
      >
        {showInfo && (
          <InfoMessage
            type="info"
            message="Select at least 1 card from each column."
          />
        )}
      </TilesTable>

      {showModal && (
        <Modal handleModalClose={handleModalClose}>
          {/* TODO: Should become a component in future */}

          <div className="PlantsElectrical_modal">
            <div className="PlantsElectrical_modal_left">
              <h1>Add new {modalType}</h1>

              <div className="modal_form-container">
                <h2>Quick add</h2>

                <div className="modal_form-row flex-center">
                  <Button
                    buttonText="Upload PAN file"
                  />

                  <Button
                    buttonText="Select from presets"
                  />
                </div>
              </div>

              <div className="modal_form-container">
                <h2>Parameters</h2>

                <div className="modal_form-row flex-center">
                  <div className="full">
                    <Input labelText="Module type" inputType="text" />
                  </div>
                </div>

                <div className="modal_form-row flex-center">
                  <Input
                    labelText="Module type"
                    inputType="select"
                    selectValues={PLANTS_MODAL_SELECT_PAYLOAD.moduleType}
                    inputValueHandler={(value) => setModuleType(value)}
                  />
                  <Input
                    labelText="Module layers"
                    inputType="select"
                    selectValues={PLANTS_MODAL_SELECT_PAYLOAD.moduleLayers}
                  />
                </div>

                <div className="modal_form-row flex-center">
                  <Input labelText="Width" inputType="text" />

                  <Input labelText="Height" inputType="text" />
                </div>

                <div className="modal_form-row flex-center">
                  <Input labelText="Thickness" inputType="text" />

                  <Input labelText="Glass thickness" inputType="text" />
                </div>

                <div className="modal_form-row flex-center">
                  <Input
                    labelText="No. of cells along width"
                    inputType="text"
                  />

                  <Input
                    labelText="No. of cells along height"
                    inputType="text"
                  />
                </div>

                <div className="modal_form-row flex-center">
                  <Input
                    labelText="Bifaciality"
                    inputType="text"
                    disabled={disableMonoface}
                  />

                  <Input labelText="Number of bypass diodes" inputType="text" />
                </div>
              </div>
            </div>

            <div className="PlantsElectrical_modal_right">
              <div className="PlantsElectrical_modal_right_top">
                <img className="info-icon" src={info} alt="info" />

                <p className="info-title">Module type</p>

                <p className="simple-desc">
                  Some description about this mysterious module type
                </p>

                <ul className="accordeon">
                  <li className="accordeon-items">
                    <img
                      className="arrowAccordeon-icon"
                      src={arrowAccordeon}
                      alt="arrowAccordeon icon"
                    />
                    <p className="arrowAccordeon-title">Show more details</p>
                  </li>
                </ul>
              </div>

              <div className="PlantsElectrical_modal_right_bottom">
                <div className="bottom_checkbox_wrapper">
                  <input type="checkbox" id="preset" name="preset checkbox" />
                  <label htmlFor="preset">Save as preset</label>
                </div>

                <div className="bottom_button_wrapper">
                  <Button
                    buttonText="Cancel"
                    onClickHandler={() => handleModalClose()}
                  />

                  <Button
                    buttonText="Add module"
                    primary
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
