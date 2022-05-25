<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDemandesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('demandes', function (Blueprint $table) {
            $table->bigIncrements('CodeD');
            $table->string('SanguinP');
            $table->string('Hospitale');
            $table->unsignedBigInteger('IdCitoyen');
            $table->unsignedBigInteger('IdUrg')->nullable();
            $table->foreign('IdCitoyen')->references('IdCitoyen')
            ->on('citoyens');
            $table->foreign('IdUrg')->references('IdUrg')
            ->on('urgences');
            
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
        Schema::dropIfExists('demandes');
    }
}
