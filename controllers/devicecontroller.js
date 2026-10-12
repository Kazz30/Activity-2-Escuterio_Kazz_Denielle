/*
    MIT License
    
    Copyright (c) 2025 Christian I. Cabrera || XianFire Framework
    Mindoro State University - Philippines

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    */
import { Devicecontrollers, sequelize } from "../models/Devicecontrollers.js";

await sequelize.sync();

const devicecontroller = {
  index: async (req, res) => {
    res.send("Index Page");
  },

  insert: async (req, res) => {
    const { PhoneBrand, Variant, Specs, Mah, StorageCapacity, Color } = req.body;

    const device = await Devicecontrollers.create({
      PhoneBrand,
      Variant,
      Specs,
      Mah,
      StorageCapacity,
      Color
    });

    res.status(201).json({
      status: true,
      data: device
    });
  },

  findall: async (req, res) => {
    const data = await Devicecontrollers.findAll();
    res.json({ data });
  },

  findone: async (req, res) => {
    const { id } = req.params;
    const data = await Devicecontrollers.findByPk(id);
    res.json({ data });
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { PhoneBrand, Variant, Specs, Mah, StorageCapacity, Color } = req.body;

    const [updated] = await Devicecontrollers.update(
      { PhoneBrand, Variant, Specs, Mah, StorageCapacity, Color },
      { where: { id } }
    );

    res.json({ updated });
  },

  delete: async (req, res) => {
    const { id } = req.params;
    await Devicecontrollers.destroy({ where: { id } });
    res.json({ message: "deleted" });
  }
  

};


export { devicecontroller };