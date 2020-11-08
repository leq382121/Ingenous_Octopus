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

import { CONTENT_CALCULATE_CARD, TILES_PAYLOAD } from "../../../const";

import "./PlantsElectrical.css";
import "./ModalForm.css";

export const PlantsElectrical = ({ title }) => {
  const [showInfo, setShowInfo] = useState(true);
  const [modalType, setModalType] = useState("");
  const [showModal, setShowModal] = useState(true);
  const [selectedTilesItems, setSelectedTilesItems] = useState({
    plants: [],
    modules: [],
    inverters: [],
  });

  const handleModalOn = (value) => (setShowModal(true), setModalType(value));
  const handleModalClose = () => (setShowModal(false), setModalType(""));

  // TODO: Create generator that creates entries accordingly to Columns
  useEffect(() => {
    console.log(selectedTilesItems);

    selectedTilesItems.plants.length &&
    selectedTilesItems.modules.length &&
    selectedTilesItems.inverters.length
      ? setShowInfo(false)
      : setShowInfo(true);
  }, [selectedTilesItems]);

  useEffect(() => {
    console.log(document.querySelector("body"));

    showModal
      ? document.querySelector("body").classList.add("scroll-disabled")
      : document.querySelector("body").classList.remove("scroll-disabled");
  }, [showModal]);

  const handleSelectedTiles = (type, value) => {
    setSelectedTilesItems({
      ...selectedTilesItems,
      [type]: value,
    });
  };

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
          {/* TODO: Potentialy a Component */}
          <div className="PlantsElectrical_modal">
            <div className="PlantsElectrical_modal_left">
              <h1>Add new {modalType}</h1>

              <div className="modal_form-container">
                <h2>Quick add</h2>

                <div className="modal_form-row flex-center">
                  <Button
                    buttonText="Upload PAN file"
                    onClickHandler={() => console.log("test")}
                  />

                  <Button
                    buttonText="Select from presets"
                    onClickHandler={() => console.log("test")}
                  />
                </div>
              </div>

              <div className="modal_form-container">
                <h2>Quick add</h2>

                <div className="modal_form-row flex-center">
                  <div className="full">
                    <Input labelText="Module type" inputType="text" />
                  </div>
                </div>

                <div className="modal_form-row flex-center">
                  <Input labelText="Module type" inputType="select" />

                  <Input labelText="Module layers" inputType="select" />
                </div>

                <div className="modal_form-row flex-center">
                  <Input labelText="Module type" inputType="text" />

                  <Input labelText="Module layers" inputType="text" />
                </div>
              </div>
            </div>

            <div className="PlantsElectrical_modal_right">
              <div className="PlantsElectrical_modal_right_top">
                <img className="info-icon" src={info} alt="info" />
                <h3>Module type</h3>
                <span className="simple-desc">
                  Some description about this mysterious module type
                </span>
                <ul className="accordeon">
                  <li className="accordeon-items">
                    <img
                      className="arrowAccordeon-icon"
                      scr={arrowAccordeon}
                      alt="arrowAccordeon icon"
                    />
                    <p>Show more details</p>
                  </li>
                </ul>
              </div>

              <div className="PlantsElectrical_modal_right_bottom">
                <Button
                  buttonText="Cancel"
                  onClickHandler={() => handleModalClose()}
                />

                <Button buttonText="Add module" primary />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
