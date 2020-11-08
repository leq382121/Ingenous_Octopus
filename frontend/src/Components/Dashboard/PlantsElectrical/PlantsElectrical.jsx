import React, { useEffect, useState } from "react";

import { ItemCard } from "../../Partials/ItemCard/ItemCard";
import { ItemCardContent } from "../../Partials/ItemCard/ItemCardContent";
import { TilesTable } from "../../Partials/TilesTable/TilesTable";
import { InfoMessage } from "../../Partials/InfoMessage";

// Modal
import { Modal } from "../../Partials/Modal/Modal";
import info from '../../../images/info.svg';

import { CONTENT_CALCULATE_CARD, TILES_PAYLOAD } from "../../../const";

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

      {/* handleModalClose */}
      {showModal && (
        <Modal 
          handleModalClose={handleModalClose}
        >
          <div className='PlantsElectrical_modal'>

            <div className='PlantsElectrical_modal_left'>
              <h1>Add new module</h1>
            </div>

            <div className='PlantsElectrical_modal_right'>
              <img className='info-icon' scr={info} alt='info'/>
              <h3>Module type</h3>
              <span className="simple-desc">Some description about this mysterious module type</span>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
