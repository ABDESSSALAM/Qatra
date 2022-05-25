<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarnavalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    /**
     * CREATE TABLE Carnavale(
    idCarnaval int AUTO_INCREMENT PRIMARY KEY,
        DateDebut date,
        DateFin date,
        lat float,
        lang float,
        IdAssoc int,
        Ville int,
        FOREIGN KEY(Ville) REFERENCES Ville(IdVille),
        FOREIGN KEY(IdAssoc) REFERENCES Association(IdAssoc)
    );
     */
    public function up()
    {
        Schema::create('carnavales', function (Blueprint $table) {
            $table->bigIncrements('IdCarnaval');
            $table->date('dateDebut');
            $table->date('dateFin')->nullable();
            $table->float('lat')->nullable();
            $table->float('lang')->nullable();
            $table->unsignedBigInteger('Association');
            $table->unsignedBigInteger('Ville');
            $table->foreign('Ville')->references('id')->on('villes')
            ->onUpdate('cascade');
            $table->foreign('Association')->references('IdAssoc')->on('associations')
            ->onUpdate('cascade')
            ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('carnavales');
    }
}
